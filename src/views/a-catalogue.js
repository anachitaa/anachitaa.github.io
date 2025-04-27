import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./a-catalogue.css";
import Menue from "../components/menue";

const ACatalogue = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleLeftSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleRightSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : 4));
  };

  const slideWidth = 100;

  return (
    <div className="a-catalogue-container">
      <Helmet>
        <title>a-catalogue - Ana Portofolio</title>
        <meta property="og:title" content="a-catalogue - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="a-catalogue-text16">a catalogue</span>
      <div className="a-catalogue-tshirts">
        <div className="a-catalogue-frame6">
          <img
            alt="Rectangle344078"
            src="/books/dsc07914-min-500w.jpg"
            className="a-catalogue-rectangle34"
          />
          <img
            alt="Rectangle344078"
            src="/books/dsc07938-min-500w.jpg"
            className="a-catalogue-rectangle341"
          />
          <img
            alt="Rectangle344078"
            src="/books/dsc07932-min-500w.jpg"
            className="a-catalogue-rectangle342"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            transform: `translateX(-${slideIndex * slideWidth}%)`,
            transition: "transform 0.5s ease-in-out",
            gap: "2%",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            alt="Rectangle354204"
            src="/external/catalogue/cover.jpg"
            className="a-catalogue-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="external/catalogue/img20240416_20103414.jpg"
            className="a-catalogue-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="external/catalogue/img20240416_20123235.jpg"
            className="a-catalogue-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="external/catalogue/img20240416_20143355.jpg"
            className="a-catalogue-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="external/catalogue/img20240416_20153365.jpg"
            className="a-catalogue-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="external/catalogue/tweebomen mssrt 2024 part 2 1.jpg"
            className="a-catalogue-rectangle351"
          />
          <img
            alt="Rectangle354204"
            src="external/catalogue/tweebomen mssrt 2024 part 2.jpg"
            className="a-catalogue-rectangle351"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30%",
          }}
        >
          <div className="a-catalogue-arrow" onClick={handleLeftSlide}>
            {"<"}
          </div>
          <div className="a-catalogue-arrow" onClick={handleRightSlide}>
            {">"}
          </div>
        </div>
        <span className="a-catalogue-text17">
          This catalogue is a dynamic representation of books striving to fit
          within the constraints of size, printing quality, paper texture, and
          layout, encapsulating the intricate nuances of each unique publication
          within the metaphorical box of its design.These selections are drawn
          from the archive of the finest Dutch book designs.
        </span>
      </div>
    </div>
  );
};

export default ACatalogue;
