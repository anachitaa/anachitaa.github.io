import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ALogoForACafe from './views/a-logo-for-a-cafe'
import Unity from './views/unity'
import Home from './views/home'
import ALogoForAnITCompany from './views/a-logo-for-an-it-company'
import ASeriesOfHoodiesTShirtsAndToteBags from './views/a-series-of-hoodies-t-shirts-and-tote-bags'
import Animations from './views/animations'
import About from './views/about'
import Roots from './views/roots'
import AFontMeantForDisplay from './views/a-font-meant-for-display'
import RisoPrints from './views/riso-prints'
import D from './views/d'
import APublication from './views/a-publication'
import ACatalogue from './views/a-catalogue'
import ACampaignForACinema from './views/a-campaign-for-a-cinema'
import NotFound from './views/not-found'
import { CategoryProvider } from './context/CategoryContext'
import AZine from './views/a-zine'
import OrangePub from './views/orange_pub'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ALogoForACafe} exact path="/a-logo-for-a-cafe" />
        <Route component={Unity} exact path="/unity" />
        <Route component={Home} exact path="/" />
        <Route
          component={ALogoForAnITCompany}
          exact
          path="/a-logo-for-an-it-company"
        />
        <Route
          component={ASeriesOfHoodiesTShirtsAndToteBags}
          exact
          path="/a-series-of-hoodies-t-shirts-and-tote-bags"
        />
        <Route component={Animations} exact path="/animations" />
        <Route component={About} exact path="/about" />
        <Route component={Roots} exact path="/roots" />
        <Route
          component={AFontMeantForDisplay}
          exact
          path="/a-font-meant-for-display"
        />
        <Route component={RisoPrints} exact path="/riso-prints" />
        <Route component={D} exact path="/d" />
        <Route component={APublication} exact path="/a-publication" />
        <Route component={ACatalogue} exact path="/a-catalogue" />
        <Route
          component={ACampaignForACinema}
          exact
          path="/a-campaign-for-a-cinema"
        />
        <Route component={AZine} exact path="/a-zine" />
        <Route component={OrangePub} exact path="/orange-pub" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(  <React.StrictMode>
  <Router>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </Router>
</React.StrictMode>, document.getElementById('app'))
