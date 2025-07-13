import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './animations.css'
import Menue from '../components/menue'

const TouchDesigner = (props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 700;

  return (
    <div className="animations-container">
      <Helmet>
        <title>TouchDesigner animations - Ana Portofolio</title>
        <meta property="og:title" content="TouchDesigner animations - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="animations-text16">TouchDesigner animations</span>
      <div className="animations-container1">
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="animations-rectangle35"
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <source src="/external/touch-designer/la_piata_01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="animations-frame6" style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "2%",
            width: "100%",
          }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              flex: "1",
              width: isMobile ? "100%" : "auto",
              height: "auto",
              objectFit: isMobile ? "contain" : "cover",
              maxHeight: isMobile ? "none" : "80vh",
              marginBottom: "0",
            }}
          >
            <source src="/external/touch-designer/animation.0.mp4" type="video/mp4" />
            <source src="/external/touch-designer/animation.0.mp4" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              flex: "1",
              width: isMobile ? "100%" : "auto",
              height: "auto",
              objectFit: isMobile ? "contain" : "cover",
              maxHeight: isMobile ? "none" : "80vh",
            }}
          >
            <source src="/external/touch-designer/TDMovieOut.4.mp4" type="video/mp4" />
            <source src="/external/touch-designer/TDMovieOut.4.mp4" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
        <div className="animations-frame49">
          <span className="animations-text17">
            Experimental visual explorations created with TouchDesigner, 
            combining real-time graphics, interactive media, and generative design. 
            These animations showcase dynamic systems and audio-reactive visuals 
            through node-based programming.
          </span>
        </div>
      </div>
    </div>
  )
}

export default TouchDesigner