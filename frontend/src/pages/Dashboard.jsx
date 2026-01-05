import { useEffect, useState } from "react";
import api from "../api/axios";
import MasonryGrid from "../components/MasonryGrid";
import UploadModal from "../components/UploadModal";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadImages = () => {
    api.get("/images/me").then((res) => setImages(res.data));
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    await api.delete(`/images/${id}`);
    setImages(images.filter(img => img._id !== id));
  };

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h1>Your Gallery</h1>
        <button
          className="upload-btn"
          onClick={() => setShowModal(true)}
        >
          + New Upload
        </button>
      </div>

      <MasonryGrid images={images} onDelete={handleDelete} />

      {showModal && (
        <UploadModal
          onClose={() => setShowModal(false)}
          onUpload={loadImages}
        />
      )}
    </section>
  );
}
