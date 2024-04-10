import React from 'react'

import { Helmet } from 'react-helmet'

import Menue from '../components/menue'
import './a-publication.css'

const APublication = (props) => {
  return (
    <div className="a-publication-container">
      <Helmet>
        <title>a-publication - Ana Portofolio</title>
        <meta property="og:title" content="a-publication - Ana Portofolio" />
      </Helmet>
      <Menue></Menue>
      <span className="a-publication-text">a publication</span>
      <div className="a-publication-frame55">
        <div className="a-publication-tshirts">
          <div className="a-publication-frame6">
            <img
              alt="Rectangle344202"
              src="/external/rectangle344202-vqo-400w.png"
              className="a-publication-rectangle34"
            />
            <img
              alt="Rectangle364202"
              src="/external/rectangle364202-2p-400w.png"
              className="a-publication-rectangle36"
            />
            <img
              alt="Rectangle354202"
              src="/external/rectangle354202-tw7b-400w.png"
              className="a-publication-rectangle35"
            />
          </div>
        </div>
        <div className="a-publication-tshirts1">
          <div className="a-publication-frame61">
            <img
              alt="Rectangle354204"
              src="/external/rectangle354204-ohbl-900h.png"
              className="a-publication-rectangle351"
            />
          </div>
        </div>
        <div className="a-publication-frame49">
          <span className="a-publication-text1">
            This publication draws inspiration from a 1971 magazine called
            &apos;Ain’t I A Woman.&apos; While its content is derived from the
            original magazine, my main focus lies in exploring how we read
            articles, emphasizing grid and microtypography.
          </span>
        </div>
      </div>
    </div>
  )
}

export default APublication
