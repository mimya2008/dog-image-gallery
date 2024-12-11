import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.length > 0 ? (
        images.map((img, index) => (
          <img key={index} src={img} alt="Dog" className="dog-image" />
        ))
      ) : (
        <p>No images to display. Select a breed and fetch images.</p>
      )}
    </div>
  );
};

export default ImageGallery;
