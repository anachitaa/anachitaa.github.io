import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ALogoForAnITCompany from './views/a-logo-for-an-it-company'
import Unity from './views/unity'
import Home from './views/home'
import ASeriesOfHoodiesTShirtsAndToteBags from './views/a-series-of-hoodies-t-shirts-and-tote-bags'
import Animations from './views/animations'
import Roots from './views/roots'
import AFontMeantForDisplay from './views/a-font-meant-for-display'
import D from './views/d'
import APublication from './views/a-publication'
import About from './views/about'
import NotFound from './views/not-found'
import ALogoForACafe from './views/a-logo-for-a-cafe'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={ALogoForAnITCompany}
          exact
          path="/it-company"
        />
        <Route
          component={ALogoForACafe}
          path="/cafe" />
        <Route component={Unity} exact path="/unity" />
        <Route component={Home} exact path="/" />
        <Route
          component={ASeriesOfHoodiesTShirtsAndToteBags}
          exact
          path="/a-series-of-hoodies-t-shirts-and-tote-bags"
        />
        <Route component={Animations} exact path="/animations" />
        <Route component={Roots} exact path="/roots" />
        <Route
          component={AFontMeantForDisplay}
          exact
          path="/a-font-meant-for-display"
        />
        <Route component={D} exact path="/d" />
        <Route component={APublication} exact path="/a-publication" />
        <Route component={About} path="/about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
