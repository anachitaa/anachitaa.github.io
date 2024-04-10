import React from 'react'

import { Helmet } from 'react-helmet'

import Menue from '../components/menue'
import './a-font-meant-for-display.css'

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
      <Menue></Menue>
      <span className="a-font-meant-for-display-text">
        a font meant for display
      </span>
      <div className="a-font-meant-for-display-container1">
        <img
          alt="Rectangle83978"
          src="/animations/font-1500w.gif"
          className="a-font-meant-for-display-rectangle8"
        />
        <div className="a-font-meant-for-display-component3">
          <div className="a-font-meant-for-display-frame5">
            <img
              alt="font1I397"
              src="/external/font1i397-6a5n-400h.png"
              className="a-font-meant-for-display-font1"
            />
          </div>
        </div>
        <div className="a-font-meant-for-display-frame6">
          <div className="a-font-meant-for-display-frame1">
            <img
              alt="L10223211I397"
              src="/external/l10223211i397-6myn-400w.png"
              className="a-font-meant-for-display-l10223211"
            />
          </div>
          <div className="a-font-meant-for-display-frame3">
            <img
              alt="L10223213I397"
              src="/external/l10223213i397-mpsq-400w.png"
              className="a-font-meant-for-display-l10223213"
            />
          </div>
          <div className="a-font-meant-for-display-frame2">
            <img
              alt="L10223212I397"
              src="/external/l10223212i397-1t1c-400w.png"
              className="a-font-meant-for-display-l10223212"
            />
          </div>
        </div>
        <div className="a-font-meant-for-display-frame51"></div>
      </div>
    </div>
  )
}

export default AFontMeantForDisplay
