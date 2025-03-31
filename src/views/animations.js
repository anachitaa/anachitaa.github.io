import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './animations.css'
import Menue from '../components/menue'

const Animations = (props) => {
  return (
    <div className="animations-container">
      <Helmet>
        <title>animations - Ana Portofolio</title>
        <meta property="og:title" content="animations - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="animations-text16">a series of animations</span>
      <div className="animations-container1">
        <img
          alt="Rectangle354218"
          src="/animations/culture-2-1500w.gif"
          className="animations-rectangle35"
        />
        <img
          alt="Rectangle354211"
          src="/animations/color%20-1500w.gif"
          className="animations-rectangle351"
        />
        <div className="animations-frame6">
          <img
            alt="Rectangle354217"
            src="/animations/incontto.gif"
            className="animations-rectangle352"
          />
          <img
            alt="Rectangle354217"
            src="/animations/animatie_trecere-1500w.gif"
            className="animations-rectangle353"
          />
        </div>
        <img
          alt="Rectangle354211"
          src="/animations/nono-1500w.gif"
          className="animations-rectangle354"
        />
        <div className="animations-frame49">
          <span className="animations-text17">
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
