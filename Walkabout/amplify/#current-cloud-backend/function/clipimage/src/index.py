import json
import boto3
import base64
import requests
import time
from botocore.exceptions import ClientError
s3 = boto3.client('s3')
dynamodb = boto3.client('dynamodb')
dynamodb_resource = boto3.resource('dynamodb')
def lambda_handler(event, context):
    print("Received event:", event)
  
    image_data = event['image']

    binary_data = base64.b64decode(image_data)
    current_time = int(time.time())
    folder_name = 'image'
    file_name=str(current_time)+".jpg"
    s3_key = f"{folder_name}/{file_name}"
    
    api_url = f"http://172.31.23.26:80/image2predict"
    payload = {"image_data": image_data} 
    headers = {"Content-Type": "application/json"} 
    response = requests.post(api_url, json=payload, headers=headers)
    if response.status_code == 200:
        print("API call successful")
        # condition_expression = 'attribute_not_exists(image_feature)'
        data = response.json()
        table_name = 'CLIP'
        new_image_feature = [str(value) for value in data]
        table = dynamodb_resource.Table(table_name)
        response = table.scan()
        item_exists = False
        for item in response['Items']:
            existing_image_feature = item.get('image_feature')
            if existing_image_feature and existing_image_feature == new_image_feature:
                item_exists = True
                break
        if item_exists:
           
            return {
                'statusCode': 200,
                'body': 'The image already exists.'
            }
        else:
            item = {
                'time_stamp': {'N':str(current_time) },
                'image_feature': {'L': [{'S': str(value)} for value in data]}
            }
            response = dynamodb.put_item(TableName=table_name, Item=item, )
            s3.put_object(Body=binary_data, Bucket='dusan.s3', Key=s3_key)
            return {
                'statusCode': 200,
                'body': 'Successfully saved!'
            }
    else:
        print(f"API call failed with status code {response.status_code}")
        return {
            'statusCode': 400,
            'body': "Model request failed"
        }
    
  
