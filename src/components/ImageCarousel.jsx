import React, { useEffect, useState } from "react";

const API_BASE_URL = "https://api.samuelvezeau.ca/api/photos";

export default function ImageCarousel({ destination }) {
  const [idx, setIdx] = useState(0);
  const [images, setImages] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const loadPhotos = async () => {
      setIsLoading(true);
      setHasError(false);
      setIdx(0);

      try {
        const response = await fetch(`${API_BASE_URL}/${destination}`);

        if (!response.ok) {
          throw new Error("Photo API request failed");
        }

        const payload = await response.json();
        const photos = Array.isArray(payload.photos)
          ? payload.photos
              .map((photo) => (typeof photo === "string" ? photo : photo?.url))
              .filter(Boolean)
          : [];

        if (isActive) {
          setImages(photos);
        }
      } catch (error) {
        if (isActive) {
          setImages([]);
          setHasError(true);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    if (destination) {
      loadPhotos();
    } else {
      setImages([]);
      setIsLoading(false);
      setHasError(true);
    }

    return () => {
      isActive = false;
    };
  }, [destination]);

  const prev = () => setIdx((currentIndex) => (currentIndex + images.length - 1) % images.length);
  const next = () => setIdx((currentIndex) => (currentIndex + 1) % images.length);

  if (isLoading) {
    return <p className="carousel-empty">Chargement des photos...</p>;
  }

  if (hasError || images.length === 0) {
    return <p className="carousel-empty">Aucune photo</p>;
  }

  return (
    <div className="carousel-container">
      <button onClick={prev} className="carousel-button" aria-label="Image précédente">‹</button>

      <div className="carousel-image-wrapper">
        <img
          src={images[idx]}
          alt={`Slide ${idx + 1}`}
          className="carousel-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <button onClick={next} className="carousel-button" aria-label="Image suivante">›</button>
    </div>
  );
}
