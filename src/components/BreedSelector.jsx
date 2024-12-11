import React, { useEffect, useState } from "react";


const BreedSelector = ({ breed, numImages, onBreedChange, onNumImagesChange, onImagesFetch }) => {
  const [breeds, setBreeds] = useState([]);

  // Fetch breeds on component mount
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        if (response.ok) {
          const data = await response.json(); // Parse the JSON response
          setBreeds(Object.keys(data.message)); // Get breed names as an array
        } else {
          console.error("Failed to fetch breeds:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching breeds:", error.message);
      }
    };
    fetchBreeds();
  }, []);

  // Handle form submission and fetch images
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!breed) {
      alert("Please select a breed.");
      return;
    }
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${numImages}`
      );
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        onImagesFetch(data.message); // Pass fetched images to parent
      } else {
        console.error("Failed to fetch images:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  return (
    <form className= "form-control" onSubmit={handleSubmit}>
      <label>Breed</label>
      <select value={breed} onChange={(e) => onBreedChange(e.target.value)} required>
          <option value="" disabled>Select a breed</option>
          {breeds.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      <label>Number of Images</label>
      <input
          type="number"
          value={numImages}
          onChange={(e) => onNumImagesChange(e.target.value)}
          min="1"
          max="100"
          required
        />
      <div className="btn">
        <button type="submit">Fetch Images</button>
      </div>
    </form>
  );
  
}
export default BreedSelector;
