import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './a-logo-for-an-it-company.css'
import Menue from '../components/menue'

const ALogoForAnITCompany = (props) => {
  return (
    <div className="a-logo-for-an-it-company-container">
      <Helmet>
        <title>a-logo-for-an-IT-company - Ana Portofolio</title>
        <meta
          property="og:title"
          content="a-logo-for-an-IT-company - Ana Portofolio"
        />
      </Helmet>
      <Menue />
      <span className="a-logo-for-an-it-company-text16">
        a logo for an IT company
      </span>
      <div className="a-logo-for-an-it-company-tshirts">
        <img
          alt="Rectangle344542"
          src="/animations/mtd1-1500w.gif"
          className="a-logo-for-an-it-company-rectangle34"
        />
        <img
          alt="Rectangle344656"
          src="/external/rectangle344656-v6eq-1500w.png"
          className="a-logo-for-an-it-company-rectangle341"
        />
        <img
          alt="Rectangle344657"
          src="/external/rectangle344657-hupp-1500w.png"
          className="a-logo-for-an-it-company-rectangle342"
        />
        <img
          alt="Rectangle344657"
          src="/external/rectangle344657-hhkf-1500w.png"
          className="a-logo-for-an-it-company-rectangle343"
        />
        <div className="a-logo-for-an-it-company-frame49">
          <span className="a-logo-for-an-it-company-text17">
            MTD Technology is an IT company that I began working for in August
            2022. MTD is a start-up specializing in IT consulting and
            development. I had the opportunity to create their visual identity,
            emphasizing their unique combination of IT, consulting, and design
            through the creation of new products and solutions for their
            customers.
          </span>
        </div>
      </div>
    </div>
  )
}

export default ALogoForAnITCompany
