import React, { useState } from "react";

export default function ImageCarousel({ images, width = 600, height = 360 }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + images.length - 1) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem"
    }}>
      <button onClick={prev} className="carousel-button" aria-label="Image précédente">‹</button>

      <div style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        borderRadius: "4px",
        flexShrink: 0,
        background: "#f0f0f0"
      }}>
        <img
          src={images[idx]}
          alt={`Slide ${idx + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </div>

      <button onClick={next} className="carousel-button" aria-label="Image suivante">›</button>
    </div>
  );
}
