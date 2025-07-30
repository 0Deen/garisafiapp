import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../../Model/Model";
import { Link } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = () => {
  const [carColor, setCarColor] = useState("red");

  const changeColor = (color) => {
    setCarColor(color);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="heroMain">
      <div className="sectionleft">
        <p>New Cars</p>
        <h1>Summer Sale Stylish</h1>
        <span>Limited Time Offer - Up to 60% off & Free Shipping</span>
        <div className="heroLink">
          <Link to="/shop" onClick={scrollToTop}>
            <h5>Discover More</h5>
          </Link>
        </div>
      </div>

      <div className="sectionright">
        <Canvas
          className="canvasModel"
          camera={{ position: [0, 2, 8], fov: 45 }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
          <Model color={carColor} />
        </Canvas>

        <div className="heroColorBtn">
          <button
            onClick={() => changeColor("#353933")}
            style={{ backgroundColor: "#353933" }}
          ></button>
          <button
            onClick={() => changeColor("#EFBD4E")}
            style={{ backgroundColor: "#EFBD4E" }}
          ></button>
          <button
            onClick={() => changeColor("#726DE7")}
            style={{ backgroundColor: "#726DE7" }}
          ></button>
          <button
            onClick={() => changeColor("red")}
            style={{ backgroundColor: "red" }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
