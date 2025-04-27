import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './a-font-meant-for-display.css'
import Menue from '../components/menue'

const AFontMeantForDisplay = (props) => {
  return (
    <div className="a-font-meant-for-display-container">
      <Helmet>
        <title>a-font-meant-for-display - Ana Portofolio</title>
        <meta
          property="og:title"
          content="a-font-meant-for-display - Ana Portofolio"
        />
      </Helmet>
      <Menue />
      <span className="a-font-meant-for-display-text16">
        a font meant for display
      </span>
      <div className="a-font-meant-for-display-container1">
        <div className="a-font-meant-for-display-image-wrapper">
          <img
            alt="Rectangle83978"
            src="/animations/b1ce2389-fa76-4288-83f1-1f8dc172c53a-1500w.gif"
            className="a-font-meant-for-display-rectangle8"
          />
        </div>
        <img
          alt="Rectangle83978"
          src="/external/font1i397-6a5n-1500w.png"
          className="a-font-meant-for-display-rectangle81"
        />
        <div className="a-font-meant-for-display-frame6">
          <img
            alt="Rectangle344078"
            src="/font/font3.gif"
            className="a-font-meant-for-display-rectangle34"
          />
          <img
            alt="Rectangle344078"
            src="/font/font4.gif"
            className="a-font-meant-for-display-rectangle341"
          />
        </div>
        <img
          alt="Rectangle83978"
          src="/external/tq_yamwc20kv2-z0lk-1500w.png"
          className="a-font-meant-for-display-rectangle82"
        />
      </div>
    </div>
  )
}

export default AFontMeantForDisplay
