import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './d.css'
import Menue from '../components/menue'

const D = (props) => {
  return (
    <div className="d-container">
      <Helmet>
        <title>d - Ana Portofolio</title>
        <meta property="og:title" content="d - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="d-text16">
        <span className="d-text17">some 3D printed objects</span>
        <br></br>
      </span>
      <div className="d-tshirts">
        <div className="d-frame6">
          <span className="d-text19">
            a chess board, fully 3D printed with PLA
          </span>
          <img
            alt="Rectangle344138"
            src="/external/rectangle344138-2e3m-300w.png"
            className="d-rectangle34"
          />
          <img
            alt="Rectangle364138"
            src="/external/rectangle364138-ex3m-300w.png"
            className="d-rectangle36"
          />
          <img
            alt="Rectangle354138"
            src="/external/rectangle354138-mw3f-300w.png"
            className="d-rectangle35"
          />
        </div>
        <video
          src="/animations/chess.mp4"
          poster="/external/rectangle344139-kg9-1500w.png"
          autoPlay="true"
          controls="true"
          className="d-video"
        ></video>
        <div className="d-frame51">
          <span className="d-text20">
            <span>
              a vase fully
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              3D printed
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>with PLA</span>
          </span>
          <img
            alt="Rectangle374139"
            src="/external/rectangle374139-xiz9-300w.png"
            className="d-rectangle37"
          />
          <img
            alt="Rectangle344138"
            src="/external/rectangle344138-g1sk-300w.png"
            className="d-rectangle341"
          />
          <img
            alt="Rectangle354138"
            src="/external/rectangle354138-nxwy-300w.png"
            className="d-rectangle351"
          />
        </div>
      </div>
    </div>
  )
}

export default D
