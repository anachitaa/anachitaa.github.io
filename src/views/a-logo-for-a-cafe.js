import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './a-logo-for-a-cafe.css'
import Menue from '../components/menue'

const ALogoForACafe = (props) => {
  return (
    <div className="a-logo-for-a-cafe-container">
      <Helmet>
        <title>a-logo-for-a-cafe - Ana Portofolio</title>
        <meta
          property="og:title"
          content="a-logo-for-a-cafe - Ana Portofolio"
        />
      </Helmet>
      <Menue/>
      <span className="a-logo-for-a-cafe-text16">a logo for a cafe</span>
      <div className="a-logo-for-a-cafe-tshirts">
        <img
          alt="Rectangle344657"
          src="/external/harvest.png"
          className="a-logo-for-a-cafe-rectangle34"
        />
        <img
          alt="Rectangle344657"
          src="/external/HARVEST_Page_2.png"
          className="a-logo-for-a-cafe-rectangle341"
        />
        <img
          alt="Rectangle344657"
          src="/external/harvest_page_7.png"
          className="a-logo-for-a-cafe-rectangle342"
        />
        <div className="a-logo-for-a-cafe-container1">
          <img
            alt="Rectangle344542"
            src="/external/img_3028-ezgif.com-video-to-gif-converter.gif"
            className="a-logo-for-a-cafe-rectangle343"
          />
        </div>
        <div className="a-logo-for-a-cafe-frame49">
          <span className="a-logo-for-a-cafe-text17">
            Harvest is a specialty coffee cafe located in Craiova, Romania. This
            project holds a special place in my heart as it was the first visual
            identity I ever created.
          </span>
        </div>
      </div>
    </div>
  )
}

export default ALogoForACafe
