import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import MasonryGrid from "../components/MasonryGrid";
import "../styles/profile.css";

export default function PublicProfile() {
  const { username } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    api.get(`/images/profile/${username}`).then((res) =>
      setImages(res.data)
    );
  }, [username]);

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="avatar">
          {username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1>{username}</h1>
          <p>Digital artist</p>
        </div>
      </div>

      <MasonryGrid images={images} />
    </section>
  );
}
