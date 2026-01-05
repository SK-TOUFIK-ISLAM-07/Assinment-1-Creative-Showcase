import { useEffect, useState } from "react";
import api from "../api/axios";
import MasonryGrid from "../components/MasonryGrid";

export default function Explore() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/images")
      .then(res => {
        setImages(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <h1>Curated memories from the digital frontier.</h1>
      <p className="subtitle">
        A minimalist space for artists to showcase their work, share their vision,
        and connect through visual storytelling.
      </p>

      {loading && <p>Loading artworks…</p>}
      {!loading && images.length === 0 && <p>No artworks found.</p>}

      {images.length > 0 && <MasonryGrid images={images} />}
    </div>
  );
}
