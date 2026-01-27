import React from "react";
import { brandImages } from "../../assets/assiets";
import "../../styles/welcomeVideo.css";
const WelcomeVideo = () => {
  return (
    <div className="video-container">
      <video className="hero-video" src={brandImages[2]} autoPlay muted playsInline>
        the web browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <h1>Herzlich willkommen in der Welt der Gärten</h1>
        <p>Wir gestalten für Sie lebendige grüne Räume</p>
      </div>
    </div>
  );
};

export default WelcomeVideo;
