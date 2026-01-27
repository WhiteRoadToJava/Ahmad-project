import React, { useEffect, useState } from "react";

import "../styles/slide.css";

const Slide = ({ images }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    setImageSrc(images[index]);
  }, [images, index]);
  if (!images) return null;

  const hankdleClick = (indexed) => {
    if (indexed > images.length - 1) {
      setIndex(0);
    } else if (indexed < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(indexed);
    }
    setImageSrc(images[index]);
  };


  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      hankdleClick(index + 1);
    }, 12000);
    return () => {
      clearInterval(interval);
    };

  }, [index])
        

  return (
    <div className="slide-container">
      <button className="arrou left" onClick={() => hankdleClick(index - 1)}>prev</button>
      <div className="slide">
      <img src={imageSrc} alt="" />
        </div>
      <button className="arrou right" onClick={() => hankdleClick(index + 1)}>next</button>
    </div>
  );
};

export default Slide;
