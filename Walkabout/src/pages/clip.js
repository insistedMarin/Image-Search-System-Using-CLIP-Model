import './style.css'
import React, { useState } from 'react'
import { API } from 'aws-amplify';

export default function Clip(){

    const [inputText, setInputText] = useState('');
    const [images, setImages] = useState(null);
    const [file, setFile] = useState(null);
    const apiName = 'clipuse'; 
    const path_text = '/text'; 
    const path_image='/image';
    async function fetchData(){
      try {
        const response = await API.post(apiName, path_text, {
          body: { text: inputText },
        });
        console.log(typeof(response.body))
        var data=JSON.parse(response.body)
        console.log(typeof(data))
        setImages(data);
      
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };
    async function handleUpload(event) {
        event.preventDefault();
        if (!file) {
          alert('Please select a file.');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64Image = e.target.result.split(',')[1];
          try {
            const response = await API.post(apiName, path_image, {
              body: { image: base64Image },
            });
            alert(response.body);
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        };
        reader.readAsDataURL(file);
      }


    return(<div className='body'>
    <h1>Upload Image</h1>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setFile(e.target.files[0])}
    />
    <button onClick={handleUpload}>Upload Image</button>
    <h1>Image Search</h1>
      <input
        className="input-text"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a sentence"
      />
      <button onClick={fetchData}>Search Images</button>
      
      <div>
  {images && images.map((base64Image, index) => (
    <img className='image_show'
      key={index}
      src={`data:image/png;base64,${base64Image}`}
      alt="Generated"  
    />
  ))}
</div>
    </div>)
}