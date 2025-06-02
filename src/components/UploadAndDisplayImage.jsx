import React from 'react'
import { useState } from 'react';

const UploadAndDisplayImage = ({imageName}) => {
// Define a state variable to store the selected image
const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    {/* Conditionally render the selected image if it exists */}
    {selectedImage && (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      {/* Input element to select an image file */}
      <input
        type="file"
        name={imageName}
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log("IMG.event.target.files==>",event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]); // Update the state with the selected file
        }}
      />
    </>
  )
}

export default UploadAndDisplayImage