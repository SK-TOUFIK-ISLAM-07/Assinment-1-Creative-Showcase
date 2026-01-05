export default function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img
        src={`https://assinment-1-creative-showcase-backend.onrender.com${image.imageUrl}`}
        alt="Artwork"
      />
    </div>
  );
}
