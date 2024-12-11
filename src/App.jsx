import React, { useState } from "react";
import Breed from "./components/BreedSelector";
import Gallery from "./components/ImageGallery";
import "./App.css";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

const App = () => {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const handleBreedChange = (selectedBreed) => setBreed(selectedBreed);
  const handleNumImagesChange = (number) => setNumImages(number);

  const handleImagesFetch = (fetchedImages) => setImages(fetchedImages);

  return (
    <div className="container">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
        breed={breed}
        numImages={numImages}
        onBreedChange={handleBreedChange}
        onNumImagesChange={handleNumImagesChange}
        onImagesFetch={handleImagesFetch}
      />
      <ImageGallery images={images} />
      <Footer/><div className=""></div>
    </div>
  );
};

export default App;
