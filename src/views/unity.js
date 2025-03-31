import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './unity.css'
import Menue from '../components/menue'

const Unity = (props) => {
  return (
    <div className="unity-container">
      <Helmet>
        <title>unity - Ana Portofolio</title>
        <meta property="og:title" content="unity - Ana Portofolio" />
      </Helmet>
     <Menue />
      <span className="unity-text16">a virtual walk through - Paper Town</span>
      <div className="unity-tshirts">
        <div className="unity-frame6">
          <img
            alt="Rectangle354542"
            src="/external/rectangle354542-nmnm-1500w.png"
            className="unity-rectangle35"
          />
          <img
            alt="Rectangle344542"
            src="/external/rectangle344542-v8ws-1500w.png"
            className="unity-rectangle34"
          />
        </div>
        <a
          href="https://play.unity.com/mg/other/my-new-microgame-4764?fbclid=IwAR1XpDhQ8LNNiq4bWf-YQjZjhs-GorYZYkdW1-J800WApH4NbyMi-NPrnj8"
          target="_blank"
          rel="noreferrer noopener"
          className="unity-link"
        >
          <div className="unity-frame53">
            <span className="unity-text17">
              <span>Try it yourself</span>
            </span>
          </div>
        </a>
        <div className="unity-frame52">
          <video
            src="/animations/unity-2-2.mp4"
            loop="true"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay="true"
            controls="true"
            className="unity-video"
          ></video>
        </div>
        <div className="unity-frame49">
          <span className="unity-text19">
            Paper Town is a nostalgic stroll down memory lane, where the
            cityscape mirrors my hometown through the innocent lens of
            childhood, appearing like a paper-cutout version of reality. As you
            traverse through its streets, you unravel layers of forgotten
            memories, each corner holding a piece of the past waiting to be
            rediscovered.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Unity
