import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function Artists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/users")
      .then(res => {
        setArtists(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Artists API error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "48px" }}>
      <h1 style={{ marginBottom: "32px" }}>Artists</h1>

      {loading && <p>Loading artists...</p>}

      {!loading && artists.length === 0 && (
        <p>No artists found.</p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "24px"
      }}>
        {artists.map(artist => (
          <Link
            key={artist._id}
            to={`/profile/${artist.username}`}
            style={{
              textDecoration: "none",
              background: "white",
              padding: "24px",
              borderRadius: "14px",
              color: "#111"
            }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#111",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              marginBottom: "12px"
            }}>
              {artist.username.charAt(0).toUpperCase()}
            </div>

            <strong>{artist.username}</strong>
          </Link>
        ))}
      </div>
    </div>
  );
}
