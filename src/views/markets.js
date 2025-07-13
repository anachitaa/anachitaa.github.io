import React, { useState } from "react";
import { Link } from "react-router-dom";
    
import { Helmet } from "react-helmet";
    
import Menue from "../components/menue";

const Markets = () => {

      const [slideIndex, setSlideIndex] = useState(0);
      const handleLeftSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      };
    
      const handleRightSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex < 23 ? prevIndex + 1 : 23
        );
      };
    
      const slideWidth = 100;
    
      return (
        <div className="a-publication-container">
          <Helmet>
            <title>a photo book about markets - Ana Portofolio</title>
            <meta property="og:title" content="a photo book about markets - Ana Portofolio" />
          </Helmet>
          <Menue />
          <span className="a-publication-text16">a photo book about markets</span>
          <div className="a-publication-frame55">
            <div className="a-publication-frame6">
              <img
                alt="Rectangle344202"
                src="/external/marktes/GRS80385.jpg"
                className="a-publication-rectangle34"
              />
              <img
                alt="Rectangle364202"
                src="/external/marktes/GRS80386.jpg"
                className="a-publication-rectangle36"
              />
              <img
                alt="Rectangle354202"
                src="/external/marktes/GRS80387.jpg"
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
                width: "100%",
                height: "auto",
              }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80388.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80389.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80390.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80391.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80392.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80393.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80394.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80395.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80396.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80397.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80398.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80399.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80400.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80401.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80402.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80403.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80404.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80405.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80406.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80407.jpg"
                className="a-publication-rectangle351"
              />
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Rectangle354204"
                src="/external/marktes/GRS80408.jpg"
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
                This photo book captures the vibrant essence of local markets, 
                exploring the intersection of commerce, culture, and community. 
                Through candid photography, it documents the daily rhythms and 
                human connections that define these bustling spaces.
              </span>
            </div>
          </div>
        </div>
      );
    };
    


export default Markets;