import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./roots.css";
import Menue from "../components/menue";
import ModalImage from "react-modal-image";

const Roots = (props) => {
  return (
    <div className="roots-container">
      <Helmet>
        <title>roots - Ana Portofolio</title>
        <meta property="og:title" content="roots - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="roots-text16">
        <span className="roots-text17">a series of photos - Roots </span>
        <br></br>
      </span>
      <div className="roots-frame54">
        <div className="roots-tshirts">
          <ModalImage
            alt="photo 1"
            small="/external/roots/1.png"
            large="/external/roots/1.png"
            hideDownload={true}
            className="roots-rectangle35"
          />
          <ModalImage
            alt="photo 2"
            small="/external/roots/2.png"
            large="/external/roots/2.png"
            hideDownload={true}
            className="roots-rectangle35"
          />
        </div>
        <div className="roots-tshirts">
        <ModalImage
            alt="photo 2"
            small="/external/roots/3.png"
            large="/external/roots/3.png"
            hideDownload={true}
            className="roots-rectangle351"
          />
          <ModalImage
            alt="photo 2"
            small="/external/roots/4.png"
            large="/external/roots/4.png"
            hideDownload={true}
            className="roots-rectangle353"
          />
        </div>
        <div className="roots-tshirts">
        <ModalImage
            alt="photo 2"
            small="/external/roots/5.png"
            large="/external/roots/5.png"
            hideDownload={true}
            className="roots-rectangle352"
          />
          <ModalImage
            alt="photo 2"
            small="/external/roots/5.png"
            large="/external/roots/5.png"
            hideDownload={true}
            className="roots-rectangle352"
          />
        </div>
        <div className="roots-frame49">
          <span className="roots-text19">
            In my installation, I explore how childhood packaging shapes
            perceptions of graphic design. Romanian products have greatly
            influenced my aesthetic sensibilities, as reflected in photos
            contrasting humble snacks with elegant objects. I contemplate the
            values we hold and their origins, shaped by our upbringing. It
            serves as a visual tribute to the enduring impact of childhood
            design.
          </span>
        </div>
        <div className="roots-frame6">
          <ModalImage
            alt="Rectangle364211"
            small="/external/roots/roots_expo.jpg"
            large="/external/roots/roots_expo.jpg"
            hideDownload={true}
            className="roots-rectangle35"
          />
          <ModalImage
            alt="Rectangle354211"
            small="/external/roots/roots_expo3.jpg"
            large="/external/roots/roots_expo3.jpg"
            hideDownload={true}
            className="roots-rectangle35"
          />
        </div>
      </div>
    </div>
  );
};

export default Roots;
