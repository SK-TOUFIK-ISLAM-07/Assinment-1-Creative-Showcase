import React from "react";
import "../styles/masonry.css";

const BACKEND_URL = "https://assinment-1-creative-showcase-backend.onrender.com"; 

export default function MasonryGrid({ images = [] }) {
  return (
    <div className="masonry">
      {images.map(img => (
        <div className="image-card" key={img._id}>
          <img
            src={`${BACKEND_URL}${img.imageUrl}`}  
            alt={img.title || "Artwork"}
            loading="lazy"
          />

          <div className="image-overlay">
            <h4>{img.title || "Untitled"}</h4>
            <span>by {img.user?.username || "Unknown"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
