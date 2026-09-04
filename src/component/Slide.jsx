import React, { useEffect, useState } from "react";

import "../styles/slide.css";

const Slide = ({ images, alt = "BROTHERS GARTEN-LANDSCHAFTSBAU – Projektbild" }) => {
  const [index, setIndex] = useState(1);

  const hankdleClick = (indexed) => {
    if (!images) return;
    if (indexed > images.length - 1) {
      setIndex(0);
    } else if (indexed < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(indexed);
    }
  };

  useEffect(() => {
    if (!images) return;
    const interval = setInterval(() => {
      hankdleClick(index + 1);
    }, 12000);
    return () => {
      clearInterval(interval);
    };
  }, [index, images]);

  if (!images) return null;

  const imageSrc = images[index];

  return (
    <div className="slide-container">
      <button
        className="arrou left"
        onClick={() => hankdleClick(index - 1)}
        aria-label="Vorheriges Bild"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="slide">
        <img src={imageSrc} alt={`${alt} (${index + 1}/${images.length})`} />
        <div className="slide-dots">
          {images.map((_, i) => (
            <span key={i} className={i === index ? "dot active" : "dot"} />
          ))}
        </div>
      </div>
      <button
        className="arrou right"
        onClick={() => hankdleClick(index + 1)}
        aria-label="Nächstes Bild"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default Slide;
