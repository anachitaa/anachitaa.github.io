import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'
import Menue from '../components/menue'
import { useCategory } from '../context/CategoryContext'

const Home = (props) => {
  const { activeCategory } = useCategory(); 

  const isActive = (category) => {
    return activeCategory === category || activeCategory === "";
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Ana Portofolio</title>
        <meta property="og:title" content="Ana Portofolio" />
      </Helmet>
      <Menue 
      ></Menue>
      <div className="home-frame47">
        <Link to="/a-publication" 
        className={`home-navlink ${!isActive('publication') ? "hidden" : ""}`}>
          <div className="home-image2">
            <div className="home-group45">
              <img
                alt="Rectangle195392"
                src="/external/rectangle195392-aj3j-300h.png"
                className="home-rectangle19"
              />
              <img
                alt="Rectangle275392"
                src="/external/rectangle275392-m6j-300h.png"
                className="home-rectangle27"
              />
            </div>
            <span className="home-text16">
              <span>a publication</span>
            </span>
          </div>
        </Link>
        <Link to="/d" className={`home-navlink ${!isActive('3d') ? "hidden" : ""}`}>
          <div className="home-image4">
            <div className="home-group47">
              <img
                alt="Rectangle215391"
                src="/external/rectangle215391-8ytn-300w.png"
                className="home-rectangle21"
              />
              <img
                alt="Rectangle295391"
                src="/external/rectangle295391-c59i-300w.png"
                className="home-rectangle29"
              />
            </div>
            <span className="home-text18">
              <span>a 3D printed chess board</span>
            </span>
          </div>
        </Link>
        <Link to="/a-font-meant-for-display" 
        className={`home-navlink ${!isActive('type')? "hidden" : ""}`}>
          <div className="home-image3">
            <div className="home-group46">
              <img
                alt="Rectangle205391"
                src="/external/rectangle205391-bpo9-300h.png"
                className="home-rectangle20"
              />
              <img
                alt="Rectangle285391"
                src="/external/rectangle285391-4z1-300h.png"
                className="home-rectangle28"
              />
            </div>
            <span className="home-text20">
              <span>a font meant for display</span>
            </span>
          </div>
        </Link>
        <Link to="/roots" 
        className={`home-navlink ${!isActive('others') ? "hidden" : ""}`}       
         >
          <div className="home-image5">
            <div className="home-group48">
              <img
                alt="Rectangle225392"
                src="/external/rectangle225392-jefj-300h.png"
                className="home-rectangle22"
              />
              <img
                alt="Rectangle305392"
                src="/external/rectangle305392-4klw-300h.png"
                className="home-rectangle30"
              />
            </div>
            <span className="home-text22">a series of photos - Roots</span>
          </div>
        </Link>
        <Link
          to="/a-series-of-hoodies-t-shirts-and-tote-bags"
          className={`home-navlink ${!isActive('clothing') ? "hidden" : ""}`}
        >
          <div className="home-image7">
            <div className="home-group50">
              <img
                alt="Rectangle245391"
                src="/external/rectangle245391-5mdl-300w.png"
                className="home-rectangle24"
              />
              <img
                alt="Rectangle325391"
                src="/external/rectangle325391-hadu-300w.png"
                className="home-rectangle32"
              />
            </div>
            <span className="home-text23">
              <span>a series of hoodies</span>
            </span>
          </div>
        </Link>
        <Link
          to="/a-series-of-hoodies-t-shirts-and-tote-bags"
          className={`home-navlink ${!isActive('clothing') ? "hidden" : ""}`}
        >
          <div className="home-image6">
            <div className="home-group49">
              <img
                alt="Rectangle235391"
                src="/external/rectangle235391-h0gm-300w.png"
                className="home-rectangle23"
              />
              <img
                alt="Rectangle315391"
                src="/external/rectangle315391-jop-300w.png"
                className="home-rectangle31"
              />
            </div>
            <span className="home-text25">a series of t-shirts</span>
          </div>
        </Link>
        <Link to="/a-catalogue" className={`home-navlink ${!isActive("publication") ? "hidden" : ""}`}>
          <div className="home-image21">
            <div className="home-group451">
              <img
                alt="Rectangle195392"
                src="/external/rectangle195392-njfi-300h.png"
                className="home-rectangle191"
              />
              <img
                alt="Rectangle275392"
                src="/external/catalog-300h.png"
                className="home-rectangle271"
              />
            </div>
            <span className="home-text26">
              <span>a catalogue</span>
            </span>
          </div>
        </Link>
        <Link to="/d" className={`home-navlink ${!isActive('3d') ? "hidden" : ""}`}>
          <div className="home-iamge1">
            <div className="home-group44">
              <img
                alt="Rectangle185392"
                src="/external/rectangle185392-nobe-300w.png"
                className="home-rectangle18"
              />
              <img
                alt="Rectangle265392"
                src="/external/rectangle265392-xedp-300w.png"
                className="home-rectangle26"
              />
            </div>
            <span className="home-text28">
              <span>a 3D printed vase</span>
            </span>
          </div>
        </Link>
        <Link
          to="/a-series-of-hoodies-t-shirts-and-tote-bags"
          className={`home-navlink ${!isActive('clothing') ? "hidden" : ""}`}
        >
          <div className="home-image8">
            <div className="home-group51">
              <img
                alt="Rectangle255391"
                src="/external/rectangle255391-9mae-300w.png"
                className="home-rectangle25"
              />
              <img
                alt="Rectangle335391"
                src="/external/rectangle335391-sxb8-300w.png"
                className="home-rectangle33"
              />
            </div>
            <span className="home-text30">
              <span>and a crew neck</span>
            </span>
          </div>
        </Link>
        <Link to="/a-campaign-for-a-cinema" className={`home-navlink ${!isActive("branding") ? "hidden" : ""}`}>
          <div className="home-iamge11">
            <div className="home-group441">
              <img
                alt="Rectangle185391"
                src="/external/rectangle185391-1kc-300h.png"
                className="home-rectangle181"
              />
              <img
                alt="Rectangle265391"
                src="/external/rectangle265391-zqsp-300h.png"
                className="home-rectangle261"
              />
            </div>
            <span className="home-text32">a campaign for a cinema</span>
          </div>
        </Link>
        <Link to="/riso-prints" className={`home-navlink ${!isActive("others") ? "hidden" : ""}`}>
          <div className="home-image22">
            <div className="home-group452">
              <img
                alt="Rectangle195391"
                src="/external/rectangle195391-xtu-300h.png"
                className="home-rectangle192"
              />
              <img
                alt="Rectangle275391"
                src="/external/rectangle275391-g0fl-300h.png"
                className="home-rectangle272"
              />
            </div>
            <span className="home-text33">
              <span>a series of riso prints</span>
            </span>
          </div>
        </Link>
        <Link to="/unity" className={`home-navlink ${!isActive("others") ? "hidden" : ""}`}>
          <div className="home-iamge12">
            <div className="home-group442">
              <img
                alt="Rectangle185392"
                src="/external/rectangle185392-4urf-400w.png"
                className="home-rectangle182"
              />
              <img
                alt="Rectangle265392"
                src="/external/rectangle265392-z3y5-400w.png"
                className="home-rectangle262"
              />
            </div>
            <span className="home-text35">a unity game</span>
          </div>
        </Link>
        <Link to="/a-logo-for-a-cafe" className={`home-navlink ${!isActive("branding") ? "hidden" : ""}`}>
          <div className="home-iamge13">
            <div className="home-group443">
              <img
                alt="Rectangle185392"
                src="/external/rectangle185392-w0uq-300h.png"
                className="home-rectangle183"
              />
              <img
                alt="Rectangle265392"
                src="/animations/harvest-2-300h.gif"
                className="home-rectangle263"
              />
            </div>
            <span className="home-text36">a logo for a cafe</span>
          </div>
        </Link>
        <Link to="/animations" className={`home-navlink ${!isActive("animations") ? "hidden" : ""}`}>
          <div className="home-image51">
            <div className="home-group481">
              <img
                alt="Rectangle225392"
                src="/external/rectangle225392-cegq-300h.png"
                className="home-rectangle221"
              />
              <img
                alt="Rectangle305392"
                src="/animations/color%20-300h.gif"
                className="home-rectangle301"
              />
            </div>
            <span className="home-text37">
              <span>an animation</span>
            </span>
          </div>
        </Link>
        <Link to="/animations" className={`home-navlink ${!isActive("animations") ? "hidden" : ""}`}>
          <div className="home-iamge14">
            <div className="home-group444">
              <img
                alt="Rectangle185392"
                src="/external/rectangle185392-uu8b-300w.png"
                className="home-rectangle184"
              />
              <img
                alt="Rectangle265392"
                src="animations/incontto.gif"
                className="home-rectangle264"
              />
            </div>
            <span className="home-text39">
              <span>another animation</span>
            </span>
          </div>
        </Link>
        <Link to="/a-logo-for-an-it-company" className={`home-navlink ${!isActive("branding") ? "hidden" : ""}`}>
        <div className="home-iamge15">
          <div className="home-group445">
            <img
              alt="Rectangle185392"
              src="/external/rectangle185392-pbsi-400w.png"
              className="home-rectangle185"
            />
            <img
              alt="Rectangle265392"
              src="/animations/mtd-400w.gif"
              className="home-rectangle265"
            />
          </div>
          <span className="home-text41">a logo for an IT company</span>
        </div>
        </Link>
        <Link to="/animations" className={`home-navlink ${!isActive("animations") ? "hidden" : ""}`}>
          <div className="home-image52">
            <div className="home-group482">
              <img
                alt="Rectangle225392"
                src="/external/rectangle225392-ncuj-300h.png"
                className="home-rectangle222"
              />
              <img
                alt="Rectangle305392"
                src="/animations/culture-2-300h.gif"
                className="home-rectangle302"
              />
            </div>
            <span className="home-text42">and another animation</span>
          </div>
        </Link>
        <Link to="/animations" className={`home-navlink ${!isActive("animations") ? "hidden" : ""}`}>
          <div className="home-iamge16">
            <div className="home-group446">
              <img
                alt="Rectangle185392"
                src="/external/rectangle185392-pq3g-300h.png"
                className="home-rectangle186"
              />
              <img
                alt="Rectangle265392"
                src="/animations/nono-300h.gif"
                className="home-rectangle266"
              />
            </div>
            <span className="home-text43">and another animation</span>
          </div>
        </Link>
        <div className="home-iamge17">
          <span className="home-text44">
            <span>
              portofolio last
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>updated in April 2024</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
