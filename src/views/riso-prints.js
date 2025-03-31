import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './riso-prints.css'
import Menue from '../components/menue'
import ModalImage from 'react-modal-image'

const RisoPrints = (props) => {
  return (
    <div className="riso-prints-container">
      <Helmet>
        <title>riso-prints - Ana Portofolio</title>
        <meta property="og:title" content="riso-prints - Ana Portofolio" />
      </Helmet>
      <Menue />
      <span className="riso-prints-text16">a series of riso prints </span>
      <div className="riso-prints-frame54">
        <div className="riso-prints-tshirts">
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/8.png"
            large="/external/riso/8.png"
            hideDownload={true}
            className="riso-prints-rectangle35"
          />
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/7.png"
            large="/external/riso/7.png"
            hideDownload={true}
            className="riso-prints-rectangle351"
          />
        </div>
        <div className="riso-prints-tshirts1">
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/6.png"
            large="/external/riso/6.png"
            hideDownload={true}
            className="riso-prints-rectangle352"
          />
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/5.png"
            large="/external/riso/5.png"
            hideDownload={true}
            className="riso-prints-rectangle353"
          />
        </div>
        <div className="riso-prints-tshirts2">
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/4.png"
            large="/external/riso/4.png"
            hideDownload={true}
            className="riso-prints-rectangle354"
          />
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/3.png"
            large="/external/riso/3.png"
            hideDownload={true}
            className="riso-prints-rectangle355"
          />
        </div>
        <div className="riso-prints-tshirts3">
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/2.png"
            large="/external/riso/2.png"
            hideDownload={true}
            className="riso-prints-rectangle356"
          />
          <ModalImage
            alt="Rectangle354211"
            small="/external/riso/IMG_9907.png"
            large="/external/riso/IMG_9907.png"
            hideDownload={true}
            className="riso-prints-rectangle357"
          />
        </div>
        <div className="riso-prints-frame49">
          <span className="riso-prints-text17">
            This is simply a collection of riso prints, small experimental
            pieces that also feature some of my film photos.
          </span>
        </div>
      </div>
    </div>
  )
}

export default RisoPrints
