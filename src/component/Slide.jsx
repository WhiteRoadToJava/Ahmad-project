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
      <button className="arrou left" onClick={() => hankdleClick(index - 1)}>prev</button>
      <div className="slide">
      <img src={imageSrc} alt={`${alt} (${index + 1}/${images.length})`} />
        </div>
      <button className="arrou right" onClick={() => hankdleClick(index + 1)}>next</button>
    </div>
  );
};

export default Slide;
