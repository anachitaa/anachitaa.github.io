import React, { useState } from "react";
import { Link } from "react-router-dom";
    
import { Helmet } from "react-helmet";
    
import Menue from "../components/menue";

const OrangePub = () => {

      const [slideIndex, setSlideIndex] = useState(0);
      const handleLeftSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      };
    
      const handleRightSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex < 7 ? prevIndex + 1 : 7
        );
      };
    
      const slideWidth = 100;
    
      return (
        <div className="a-publication-container">
          <Helmet>
            <title>a-publication - Ana Portofolio</title>
            <meta property="og:title" content="a-publication - Ana Portofolio" />
          </Helmet>
          <Menue />
          <span className="a-publication-text16">another publication</span>
          <div className="a-publication-frame55">
            <div className="a-publication-frame6">
              <img
                alt="Rectangle344202"
                src="/external/orange-pub/DSC08219.jpg"
                className="a-publication-rectangle34"
              />
              <img
                alt="Rectangle364202"
                src="/external/orange-pub/DSC08222.jpg"
                className="a-publication-rectangle36"
              />
              <img
                alt="Rectangle354202"
                src="/external/orange-pub/DSC08236.jpg"
                className="a-publication-rectangle35"
              />
            </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              transform: `translateX(-${slideIndex * slideWidth}%)`, 
              transition: "transform 0.5s ease-in-out",
              gap: "10%",
              width: "80%",
              height: "auto",
            }}>
              <img
                style={{
                width: "58%",
                height: "auto",
              }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0005.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0007.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0008.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0009.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0010.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0011.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0012.png"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "58%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/orange-pub/IMG_0013.png"
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
                This publication draws inspiration from a 1971 magazine called
                &apos;Ain't I A Woman.&apos; While its content is derived from the
                original magazine, my main focus lies in exploring how we read
                articles, emphasizing grid and microtypography.
              </span>
            </div>
          </div>
        </div>
      );
    };
    


export default OrangePub;