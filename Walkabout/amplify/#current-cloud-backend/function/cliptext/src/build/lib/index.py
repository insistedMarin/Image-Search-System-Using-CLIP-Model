import json
import boto3
import numpy as np
from io import BytesIO
import base64
import requests
import ast
dynamodb = boto3.client('dynamodb')
s3 = boto3.client('s3')

def lambda_handler(event, context):
    text = event['text']
    
    # 请求ECS URL以获得文本特征
    response = requests.get(f"http://172.31.23.26:80/text2predict?text={text}")
    if response.status_code == 200:
        print("API call successful")
        text_feature = np.array(response.json())
    
    # 从DynamoDB表中获取所有图像特征
    table_name = 'CLIP'
    table = boto3.resource('dynamodb').Table(table_name)
    response = table.scan()
    
    max_similarity = -1
    most_similar_time_stamp = None
    top_similarities = []
    
    for item in response['Items']:
        image_feature = np.array([ast.literal_eval(val) for val in item['image_feature']])

        similarity = np.dot(text_feature.flatten(), image_feature.flatten()) / (np.linalg.norm(text_feature) * np.linalg.norm(image_feature))
        
        if similarity>0:
            if len(top_similarities) < 5:
                top_similarities.append((similarity, item['time_stamp']))
                top_similarities.sort(key=lambda x: x[0], reverse=True)
            elif similarity > top_similarities[-1][0]:
                top_similarities.pop()
                top_similarities.append((similarity, item['time_stamp']))
                top_similarities.sort(key=lambda x: x[0], reverse=True)

    # 从S3获取与最相似图像相关的图像文件并将其转换为Base64
    bucket_name = 'dusan.s3'
    base64_images = []

    for similarity, time_stamp in top_similarities:
        file_name = f"{time_stamp}.jpg"
        obj = s3.get_object(Bucket=bucket_name, Key=f'image/{file_name}')
        img_data = obj['Body'].read()

        img_base64 = base64.b64encode(img_data).decode('utf-8')
        base64_images.append(img_base64)

    # 返回Base64编码的图像列表
    return {
        'statusCode': 200,
        'body': base64_images
    }