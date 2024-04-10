import React from 'react'

import { Helmet } from 'react-helmet'

import Menue from '../components/menue'
import './roots.css'

const Roots = (props) => {
  return (
    <div className="roots-container">
      <Helmet>
        <title>roots - Ana Portofolio</title>
        <meta property="og:title" content="roots - Ana Portofolio" />
      </Helmet>
      <Menue></Menue>
      <span className="roots-text">a series of photos - Roots </span>
      <div className="roots-frame54">
        <div className="roots-tshirts">
          <div className="roots-frame6">
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-b121-500w.png"
              className="roots-rectangle35"
            />
          </div>
          <div className="roots-frame61">
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-xvru-500w.png"
              className="roots-rectangle351"
            />
          </div>
        </div>
        <div className="roots-tshirts1">
          <div className="roots-frame62">
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-oze-500w.png"
              className="roots-rectangle352"
            />
          </div>
          <div className="roots-frame63">
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-atzn-500w.png"
              className="roots-rectangle353"
            />
          </div>
        </div>
        <div className="roots-tshirts2">
          <div className="roots-frame64">
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-mc2q-500w.png"
              className="roots-rectangle354"
            />
          </div>
          <div className="roots-frame65">
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-uptd-500w.png"
              className="roots-rectangle355"
            />
          </div>
        </div>
        <div className="roots-frame49">
          <span className="roots-text1">
            This publication draws inspiration from a 1971 magazine called
            &apos;Ain’t I A Woman.&apos; While its content is derived from the
            original magazine, my main focus lies in exploring how we read
            articles, emphasizing grid and microtypography.
          </span>
        </div>
        <div className="roots-tshirts3">
          <div className="roots-frame66">
            <img
              alt="Rectangle364211"
              src="/external/rectangle364211-wt9u-400h.png"
              className="roots-rectangle36"
            />
            <img
              alt="Rectangle354211"
              src="/external/rectangle354211-k17q-400h.png"
              className="roots-rectangle356"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roots
