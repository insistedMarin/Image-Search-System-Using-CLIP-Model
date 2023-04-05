# Image-Search-System-Using-CLIP-Model
The project is completely developed on the aws platform, and it is backed up on github for easy sharing.
## Introduction
The CLIP model is an image and text matching model developed by openAI, which can be used for multiple purposes. This project implements a simple image search system implemented by matching text and image feature vectors, supporting image search and image upload.
## Usage
### Back-end
--Deploy the docker image 'public.ecr.aws/d2x9y6a2/wy-usage:1.0' on AWS ECS.

--Copy lambda function 'amplify/backend/fucntion/clipimage/src/index.py' and 'amplify/backend/fucntion/textimage/src/index.py' for creating your lambda functions of python3.9, replace the api_url with the ip address and port of your own deployed container.

--Add a layer containing package numpy and requests for lambda functions

--Configure dynamoDB and S3 and replace them in lambda functions.

--Create your own api for lambda functions

### Front-end
--If you use amplify, modify the api name and path in the page clip.js to your own.

--If you don't use amplify, you can write your own function to call your api

--npm intall

--npm start
