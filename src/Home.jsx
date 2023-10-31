import React from "react";
import { Link } from "react-router-dom";
import pic from "./pic.jpg";

function Home() {
  return (
    <div className="container">
      <div className="container-section-1">
        <img src={pic} alt="Your Image" className="image-style" />
      </div>
      <div className="container-section-2">
        <Link to="/chat" className="Button Button-1">
          <span className="Button__inner">⚡ chatter avec r3d</span>
        </Link>
        <Link to="/generate" className="Button Button-2">
          <span className="Button__inner">🎨 generer avec r3d</span>
        </Link>
        <Link to="/another-page" className="Button Button-3">
          <span className="Button__inner">🎮 jouer avec r3d</span>
        </Link>
        <Link to="/yet-another-page" className="Button Button-4">
          <span className="Button__inner">👨‍🏫 connais r3d</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
