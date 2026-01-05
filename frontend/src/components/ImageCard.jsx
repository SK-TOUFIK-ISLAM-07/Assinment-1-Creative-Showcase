export default function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img
        src={`http://localhost:5000${image.imageUrl}`}
        alt="Artwork"
      />
    </div>
  );
}
