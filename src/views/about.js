import React from 'react'

import { Helmet } from 'react-helmet'

import Menue from '../components/menue'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - Ana Portofolio</title>
        <meta property="og:title" content="about - Ana Portofolio" />
      </Helmet>
      <Menue></Menue>
      <span className="about-text">about</span>
      <div className="about-tshirts">
        <div className="about-frame6">
          <img
            alt="Rectangle355283"
            src="/external/Rectangle355283-s9c.png"
            className="about-rectangle35"
          />
          <div className="about-frame52">
            <span className="about-text01">
              I am Ana Chita, a graphic designer. My core aim is to foster a
              connection between the viewer and the design, striving for broad
              understanding of its message.
            </span>
            <div className="about-frame66">
              <span className="about-text02">instagram:</span>
              <a
                href="https://www.instagram.com/ana.are.un.mar/"
                target="_blank"
                rel="noreferrer noopener"
                className="about-text03"
              >
                @ana.are.un.mar
              </a>
            </div>
            <div className="about-frame67">
              <span className="about-text04">mail:</span>
              <span className="about-text05">chita.ana.elena@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="about-frame521">
          <div className="about-frame661">
            <span className="about-text06">education:</span>
            <span className="about-text07">
              (2021) Royal Academy of Art, The Hague
            </span>
          </div>
          <div className="about-frame671">
            <span className="about-text08">
              <span className="about-text09">projects</span>
              <span>:</span>
            </span>
            <span className="about-text11">
              (2020) brand identity for Harvest Craiova, a cafe
            </span>
          </div>
          <div className="about-frame68">
            <span className="about-text12">
              (2022) brand identity for MTD Technology
            </span>
          </div>
          <div className="about-frame71">
            <div className="about-frame69">
              <span className="about-text13">employment:</span>
              <span className="about-text14">
                (2021- NOW) UX&amp;UI designer
              </span>
            </div>
            <div className="about-frame70">
              <span className="about-text15">
                Responsible for UX and UI design, along with crafting app and
                web flow structures, as well as creating media and social
                designs.
              </span>
            </div>
          </div>
          <div className="about-frame79">
            <div className="about-frame72">
              <span className="about-text16">skills:</span>
              <span className="about-text17">Figma</span>
            </div>
            <div className="about-frame78">
              <span className="about-text18">Glyphs</span>
            </div>
            <div className="about-frame75">
              <span className="about-text19">InDesign</span>
            </div>
            <div className="about-frame76">
              <span className="about-text20">Lightroom</span>
            </div>
            <div className="about-frame77">
              <span className="about-text21">Fusion 360</span>
            </div>
            <div className="about-frame74">
              <span className="about-text22">Photoshop</span>
            </div>
            <div className="about-frame73">
              <span className="about-text23">
                Adobe Illustrator
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
