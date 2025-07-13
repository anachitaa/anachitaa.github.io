import React, { useState } from "react";
import { Link } from "react-router-dom";
    
import { Helmet } from "react-helmet";
    
import Menue from "../components/menue";

const Propaganda = () => {

      const [slideIndex, setSlideIndex] = useState(0);
      const handleLeftSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      };
    
      const handleRightSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex < 22 ? prevIndex + 1 : 22
        );
      };
    
      const slideWidth = 57.3; // Adjusted to account for gap
    
      return (
        <div className="a-publication-container">
          <Helmet>
            <title>a book about propaganda - Ana Portofolio</title>
            <meta property="og:title" content="a book about propaganda - Ana Portofolio" />
          </Helmet>
          <Menue />
          <span className="a-publication-text16">a book about propaganda</span>
          <div className="a-publication-frame55">
            <div className="a-publication-frame6">
              <img
                alt="Rectangle344202"
                src="/external/propaganda/IMG_6959.png"
                className="a-publication-rectangle34"
              />
              <img
                alt="Rectangle364202"
                src="/external/propaganda/IMG_6964.png"
                className="a-publication-rectangle36"
              />
              <img
                alt="Rectangle354202"
                src="/external/propaganda/IMG_6965.png"
                className="a-publication-rectangle35"
              />
            </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              transform: `translateX(calc(50% - ${slideIndex * slideWidth}%))`, 
              transition: "transform 0.5s ease-in-out",
              gap: "5%",
              width: "80%",
              height: "auto",
              marginLeft: "-40%",
            }}>
              <img
                style={{
                width: "auto",
                height: "90vh",
                objectFit: "contain",
              }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0014.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0016.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0017.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0018.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0019.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0020.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0021.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0022.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0023.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0024.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0025.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0026.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0027.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0028.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0029.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0030.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0031.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0032.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0033.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0034.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0035.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0036.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "auto",
                  height: "90vh",
                  objectFit: "contain",
                }}
                alt="Rectangle354204"
                src="/external/propaganda/IMG_0015.png"
                className="a-publication-rectangle351"
              />
            </div>
    
            <div style={
              {
                display: "flex",
                flexDirection: "row",
                gap: "30%",
              }
            }>
              <div className="a-publication-arrow" onClick={handleLeftSlide}>{"<"}</div>
              <div className="a-publication-arrow" onClick={handleRightSlide}>{">"}</div>
            </div>
            <div className="a-publication-frame49">
              <span className="a-publication-text17">
                This book examines the visual language of propaganda through historical 
                and contemporary examples. It explores how imagery, typography, and design 
                are used to shape public opinion and influence collective behavior, offering 
                a critical analysis of persuasive communication techniques.
              </span>
            </div>
          </div>
        </div>
      );
    };
    


export default Propaganda;