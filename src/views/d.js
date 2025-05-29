import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './d.css'
import Menue from '../components/menue'
import ModalImage from 'react-modal-image'

const D = (props) => {
  return (
    <div className="d-container">
      <Helmet>
        <title>d - Ana Portofolio</title>
        <meta property="og:title" content="d - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="d-text16">
        <span className="d-text17">a series of 3D printed objects</span>
        <br></br>
      </span>
      <div className="d-tshirts">
        <div className="d-frame6">
          <span className="d-text19">
            a chess board, fully 3D printed with PLA
          </span>
          <ModalImage
            alt="Rectangle344138"
            small="/3d/chess-1500w.jpg"
            large="/3d/chess-1500w.jpg"
            hideDownload={true}
            className="d-rectangle34"
          />
          <ModalImage
            alt="Rectangle364138"
            small="/3d/sah-min-1500w.jpg"
            large="/3d/sah-min-1500w.jpg"
            hideDownload={true}
            className="d-rectangle36"
          />
          <ModalImage
            alt="Rectangle354138"
            small="/3d/chess2-1500w.jpg"
            large="/3d/chess2-1500w.jpg"
            hideDownload={true}
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
              a vase fully 3D printed with PLA
            </span>
          </span>
          <ModalImage
            alt="Rectangle374139"
            small="/3d/img_7727-min-1500w.jpg"
            large='/3d/img_7727-min-1500w.jpg'
            hideDownload={true}
            className="d-rectangle37"
          />
          <ModalImage
            alt="Rectangle344138"
            small="/3d/img_7732-min-1500w.jpg"
            large='/3d/img_7732-min-1500w.jpg'
            hideDownload={true}
            className="d-rectangle341"
          />
          <ModalImage
            alt="Rectangle354138"
            small="/3d/img_7717-min-1500w.jpg"
            large='/3d/img_7717-min-1500w.jpg'
            hideDownload={true}
            className="d-rectangle351"
          />
        </div>
      </div>
    </div>
  )
}

export default D
