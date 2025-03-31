import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./a-publication.css";
import Menue from "../components/menue";

const APublication = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleLeftSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleRightSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex < 4 ? prevIndex + 1 : 4
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
      <span className="a-publication-text16">a publication</span>
      <div className="a-publication-frame55">
        <div className="a-publication-frame6">
          <img
            alt="Rectangle344202"
            src="/books/book1-1500w.jpg"
            className="a-publication-rectangle34"
          />
          <img
            alt="Rectangle364202"
            src="/books/book-1500w.jpg"
            className="a-publication-rectangle36"
          />
          <img
            alt="Rectangle354202"
            src="/books/book2-1500w.jpg"
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
          gap: "5%",
          width: "80%",
          height: "80%",
        }}>
          <img
            alt="Rectangle354204"
            src="/external/publication/pg1.png"
            className="a-publication-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="/external/publication/1st spread.png"
            className="a-publication-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="/external/publication/spread 2.png"
            className="a-publication-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="/external/publication/spread3.png"
            className="a-publication-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="/external/publication/page8.png"
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
            &apos;Ain’t I A Woman.&apos; While its content is derived from the
            original magazine, my main focus lies in exploring how we read
            articles, emphasizing grid and microtypography.
          </span>
        </div>
      </div>
    </div>
  );
};

export default APublication;
