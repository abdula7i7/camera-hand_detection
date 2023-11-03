import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        let videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
      })
      .catch(error => {
        console.error('Hatolik yuz berdi:', error);
      });
  }, []);

  const rasmgaOl = () => {

    let videoElement = document.getElementById('video');
    let canvas = document.createElement('canvas');

    // canvas.width = videoElement.videoWidth;
    // canvas.height = videoElement.videoHeight;

    let context = canvas.getContext('2d')
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    let images = document.querySelector('.images')
    let li = document.createElement('li')
    let imageElement = document.createElement('img')
    images.append(li)
    li.append(imageElement)
    imageElement.src = canvas.toDataURL();

  };



  return (
    <div >
      <div className='camera'>
        <video id='video' autoPlay></video>
        <div className='camera-btn'>
          <button id="capture-btn" onClick={rasmgaOl}></button>
        </div>
      </div>
      <ul className='images'>

      </ul>
    </div>
  );
}

export default App;
