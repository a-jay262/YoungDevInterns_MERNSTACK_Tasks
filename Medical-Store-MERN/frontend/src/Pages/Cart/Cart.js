import NewCartRow from "../../Components/NewCartRow/NewCartRow";
import "./Cart.css";
import "../../Components/Topbar/Topbar.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AddMedicinePage() {
	const { shopName } = useParams();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Convert image to string
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = function() {
      const imageDataString = reader.result;

      // Create FormData object to send file data
      const formData = new FormData();
      formData.append('shopName', shopName);
      formData.append('name', name);
      formData.append('quantity', quantity);
      formData.append('image', imageDataString);

	  const mediData = {shopName, name, quantity, imageDataString};

	  console.log("S: ", shopName, "N: ", name, "Q: ", quantity, "I: ", imageDataString);
      try {
		const response = fetch(`${process.env.REACT_APP_BACKEND}/medicine`, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			  Accept: "application/json",
			},
			body: JSON.stringify(mediData),
		  });
        // Make API call to save medicine data
		console.log(response.data);
        alert('Medicine data saved successfully.');
        // Reset form fields
        setName('');
        setQuantity('');
        setImage(null);
      } catch (error) {
        console.error('Failed to save medicine data:', error);
        alert('Failed to save medicine data.');
      }
    };
  };

  const handleImageChange = (event) => {
	const file = event.target.files[0];
	if (file) {
	  setImage(file);
	}
  };
  

  return (
    <div>
			<div className="topbar2">
        <br></br>
        <div className="topbar-container">
          <nav className="topbar-down">
            <div className="topbar-item-center">
              <div>
                <Link to="/UserHome">Home</Link>
              </div>
              <div>
                <Link to="/Shop">My Items</Link>
              </div>
              <div>
                <Link to="/Cart">Add Items</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
	  <div className="add-medicine-container">
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="medicineName">Medicine Name:</label>
          <input
            type="text"
            id="medicineName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="medicineImage">Medicine Image:</label>
          <input
            type="file"
            id="medicineImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
    </div>
  );
}

export default AddMedicinePage;
