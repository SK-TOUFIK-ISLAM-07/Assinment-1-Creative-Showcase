import { useState } from "react";
import api from "../api/axios";
import "../styles/uploadModal.css";

export default function UploadModal({ onClose, onUpload }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);

    setLoading(true);
    try {
      await api.post("/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      onUpload();
      onClose();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Upload Artwork</h2>
        <p>Add a new piece to your collection.</p>

        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input
            type="text"
            placeholder="e.g. Neon Dreams"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Image File</label>
          <div className="file-box">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span>Click to select file</span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}
