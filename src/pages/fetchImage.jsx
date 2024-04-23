import React, { useEffect, useState } from "react";
import cloudinary from "cloudinary-core";
import { Link } from "react-router-dom";

const CloudinaryImage = () => {
  const [imageInfo, setImageInfo] = useState({
    imageUrl: null,
    timestamp: "",
    size: 0,
  });

  useEffect(() => {
    const cloud = cloudinary.Cloudinary.new({ cloud_name: "dvehqal06" });
    const imageUrl = cloud.url("v1713875000/hmwr3lx8aevfy4hutnco", {
      width: 1280,
      height: 720,
      crop: "fill",
    });

    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        setImageInfo({
          imageUrl: imageUrl,
          timestamp: new Date().toString(),
          size: blob.size,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <button>
        <Link to="/">Go to home page</Link>
      </button>
      <p>Timestamp: {imageInfo.timestamp}</p>
      <p>Image Size: {imageInfo.size} bytes</p>
      <img src={imageInfo.imageUrl} alt="Cloudinary Image" />
    </>
  );
};

export default CloudinaryImage;
