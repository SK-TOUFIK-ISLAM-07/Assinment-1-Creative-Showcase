import { useEffect, useState } from "react";
import api from "../api/axios";
import MasonryGrid from "../components/MasonryGrid";
import "../styles/landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    api.get("/images").then(res => {
      // random selection (max 9)
      const shuffled = res.data.sort(() => 0.5 - Math.random());
      setImages(shuffled.slice(0, 9));
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="landing-hero">
        <h1>Curated memories from the digital frontier.</h1>
        <p>
          A minimalist space for artists to showcase their work, share their
          vision, and connect through visual storytelling.
        </p>

        <div className="hero-actions">
          <Link to="/dashboard" className="primary-btn">Start Creating</Link>
          <Link to="/login" className="secondary-btn">Sign In</Link>
        </div>
      </section>

      {/* IMAGE PREVIEW GRID */}
      <section className="gallery-section">
        <MasonryGrid images={images} />
      </section>
    </>
  );
}
