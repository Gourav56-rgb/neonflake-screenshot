import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cloudinary = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const saveImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myGourav");
    data.append("cloud_name", "dvehqal06");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dvehqal06/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await res.json();
      setUrl(cloudData.url);
      console.log(cloudData.url);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(url);

  return (
    <>
      <button>
        <Link to="/">Go to home page</Link>
      </button>
      <button>
        <Link to="/fetch">Fetch image from Cloudinary</Link>
      </button>
      <label for="file-upload" class="custom-file-upload">
        {image ? (
          <img src={image ? URL.createObjectURL(image) : ""} alt="img" />
        ) : (
          <img src="https://cdn-icons-png.flaticon.com/128/1665/1665680.png" />
        )}
      </label>
      <input
        id="file-upload"
        className=" text-white"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={saveImage}>Upload image to Cloudinary</button>
    </>
  );
};

export default Cloudinary;
