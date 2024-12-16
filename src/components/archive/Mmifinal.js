import React from 'react';
import img from '../images/contestants.png'

const ImageDisplay = ({ src, alt }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:"black"}}>
      <img src={img} alt={alt} style={{ width: `${window.innerWidth<1000?'100vw':'40vw'}`, height: '100vh' }} />
    </div>
  );
};

export default ImageDisplay;
