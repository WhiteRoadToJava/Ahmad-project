import React from "react";
import { welcomeVideo } from "../../assets/assiets";
import "../../styles/welcomeVideo.css";
const WelcomeVideo = () => {
  return (
    <div className="video-container">
      <video className="hero-video" src={welcomeVideo} autoPlay loop muted playsInline>
        Ihr Browser unterstützt dieses Video-Format nicht.
      </video>

      <div className="video-overlay">
        <h1>Herzlich willkommen in der Welt der Gärten</h1>
        <p>Wir gestalten für Sie lebendige grüne Räume</p>
      </div>
    </div>
  );
};

export default WelcomeVideo;
