import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './a-campaign-for-a-cinema.css'
import Menue from '../components/menue'

const ACampaignForACinema = (props) => {

  return (
    <div className="a-campaign-for-a-cinema-container">
      <Helmet>
        <title>a-campaign-for-a-cinema - Ana Portofolio</title>
        <meta
          property="og:title"
          content="a-campaign-for-a-cinema - Ana Portofolio"
        />
      </Helmet>
      <Menue />
      <span className="a-campaign-for-a-cinema-text16">
        a campaign for a cinema
      </span>
      <div className="a-campaign-for-a-cinema-tshirts">
        <div className="a-campaign-for-a-cinema-frame95">
          <img
            alt="Rectangle345694"
            src="/external/filmhuis/poser_edited.png"
            className="a-campaign-for-a-cinema-rectangle34"
          />
          <img
            alt="Rectangle355755"
            src="/external/filmhuis/poster4.png"
            className="a-campaign-for-a-cinema-rectangle35"
          />
        </div>
        <div className="a-campaign-for-a-cinema-frame93">
          <img
            alt="Rectangle345694"
            src="/animations/done_animatie-1500w.gif"
            className="a-campaign-for-a-cinema-rectangle341"
          />
        </div>
        <div className="a-campaign-for-a-cinema-frame94">
          <img
            alt="Rectangle345694"
            src="/external/filmhuis/filmhuis3.png"
            className="a-campaign-for-a-cinema-rectangle342"
          />
          <img
            alt="Rectangle365755"
            src="/external/filmhuis/print1.png"
            className="a-campaign-for-a-cinema-rectangle36"
          />
          <img
            alt="Rectangle355755"
            src="/external/filmhuis/poster5.png"
            className="a-campaign-for-a-cinema-rectangle351"
          />
        </div>
        <div className="a-campaign-for-a-cinema-frame54">
          <div className="a-campaign-for-a-cinema-frame97">
            <span className="a-campaign-for-a-cinema-text17">Team:</span>
          </div>
          <div className="a-campaign-for-a-cinema-frame971">
            <span className="a-campaign-for-a-cinema-text18">Ana Chita</span>
          </div>
          <div className="a-campaign-for-a-cinema-frame972">
            <span className="a-campaign-for-a-cinema-text19">
              Kim Akkermans
            </span>
          </div>
          <div className="a-campaign-for-a-cinema-frame98">
            <span className="a-campaign-for-a-cinema-text20">
              Bartosz Pierściński
            </span>
          </div>
          <div className="a-campaign-for-a-cinema-frame99">
            <span className="a-campaign-for-a-cinema-text21">
              Amber de Ronde
            </span>
          </div>
          <div className="a-campaign-for-a-cinema-frame100">
            <span className="a-campaign-for-a-cinema-text22">Moto Sasaki</span>
          </div>
          <div className="a-campaign-for-a-cinema-frame101">
            <span className="a-campaign-for-a-cinema-text23">
              Luke Van Wijk (photographer)
            </span>
          </div>
        </div>
        <div className="a-campaign-for-a-cinema-frame96">
          <span className="a-campaign-for-a-cinema-text24">
            Filmhuis Student Night emerged as a visual campaign crafted by a
            team of graphic designers with the aim of engaging students and
            promoting a new discount offer at Filmhuis Den Haag. The central
            theme revolved around Anti-advertising, highlighted by two key
            visual elements: the sticker featuring the 5 euro sale and the logo.
            Utilizing Helvetica italic as the sole font choice, the campaign
            maintained consistency across all posters and visuals.
          </span>
        </div>
      </div>
    </div>
  )
}

export default ACampaignForACinema
