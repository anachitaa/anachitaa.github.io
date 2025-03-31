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
            src="/external/rectangle355283-qc1i-500w.png"
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
            <span className="about-text06">
              <span>education:</span>
            </span>
            <span className="about-text08">
              (2021) Royal Academy of Art, The Hague
            </span>
          </div>
          <div className="about-frame671">
            <span className="about-text09">
              <span>projects:</span>
            </span>
            <span className="about-text11">
              <span>(2020) brand identity for Harvest Craiova, a cafe</span>
            </span>
          </div>
          <div className="about-frame68">
            <span className="about-text13">
              <span>(2022) brand identity for MTD Technology</span>
            </span>
          </div>
          <div className="about-frame71">
            <div className="about-frame69">
              <span className="about-text15">
                <span>employment:</span>
              </span>
              <span className="about-text17">
                <span>(2021- NOW) UX&amp;UI designer</span>
              </span>
            </div>
            <div className="about-frame70">
              <span className="about-text19">
                <span>
                  Responsible for UX and UI design, along with crafting app and
                  web flow structures, as well as creating media and social
                  designs.
                </span>
              </span>
            </div>
          </div>
          <div className="about-frame79">
            <div className="about-frame72">
              <span className="about-text21">
                <span> hard skills:</span>
              </span>
              <span className="about-text23">
                <span>Figma</span>
                <br></br>
                <span>Glyphs</span>
                <br></br>
                <span>InDesign</span>
                <br></br>
                <span>Lightroom</span>
                <br></br>
                <span>Photoshop</span>
                <br></br>
                <span>
                  Adobe Illustrator
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="about-frame80">
            <div className="about-frame721">
              <span className="about-text35">
                <span>intermediate knowledge of:</span>
              </span>
              <span className="about-text37">
                <span>Unity</span>
                <br></br>
                <span>Fusion 360</span>
                <br></br>
                <span>Robo Fonts</span>
                <br></br>
                <span>Premiere Pro</span>
                <br></br>
                <span>coding in html and css </span>
                <br></br>
                <span>(basics of Java Script)</span>
              </span>
            </div>
          </div>
          <div className="about-frame81">
            <div className="about-frame722">
              <span className="about-text49">
                <span> experience in:</span>
              </span>
              <span className="about-text51">
                <span>ComColor</span>
                <br></br>
                <span>Illustrarion</span>
                <br></br>
                <span>Riso printing</span>
                <br></br>
                <span>Bookbinding</span>
                <br></br>
                <span>Screenprinting</span>
                <br></br>
                <span>App and Web Flow Design</span>
                <br></br>
                <br></br>
                <br></br>
                <div className='about-text51'>website coded with the help of Stefan Jiroveanu</div>

                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
