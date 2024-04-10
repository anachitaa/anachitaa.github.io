import React from 'react'

import { Helmet } from 'react-helmet'

import Menue from '../components/menue'
import './animations.css'

const Animations = (props) => {
  return (
    <div className="animations-container">
      <Helmet>
        <title>animations - Ana Portofolio</title>
        <meta property="og:title" content="animations - Ana Portofolio" />
      </Helmet>
      <Menue></Menue>
      <span className="animations-text">a series of animations</span>
      <div className="animations-frame53">
        <div className="animations-tshirts">
          <div className="animations-frame6">
            <img
              alt="Rectangle354218"
              src="/animations/culture-2-1000w.gif"
              className="animations-rectangle35"
            />
          </div>
        </div>
        <div className="animations-tshirts1">
          <div className="animations-frame61">
            <img
              alt="Rectangle354211"
              src="/animations/color%20-1000w.gif"
              className="animations-rectangle351"
            />
          </div>
        </div>
        <div className="animations-tshirts2">
          <div className="animations-frame62">
            <img
              alt="Rectangle354217"
              src="/external/rectangle354217-eb7n-500w.png"
              className="animations-rectangle352"
            />
            <img
              alt="Rectangle354217"
              src="/animations/animatie_trecere-500w.gif"
              className="animations-rectangle353"
            />
          </div>
        </div>
        <div className="animations-tshirts3">
          <div className="animations-frame63">
            <img
              alt="Rectangle354211"
              src="/animations/nono-1000w.gif"
              className="animations-rectangle354"
            />
          </div>
        </div>
        <div className="animations-frame49">
          <span className="animations-text1">
            Over the years, I&apos;ve amassed a collection of animations, each
            exploring various techniques and styles of illustration, often
            incorporating my own film photography along the way.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Animations
