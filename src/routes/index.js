import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from '../components/nav/nav'

// import App from '../App';
import Home from '../containers/home';
import About from '../containers/about'
import Training from '../containers/training'
import CaseStudy from '../containers/caseStudy'
import NotFound from '../containers/notFound'

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/training" exact component={Training} />
        <Route path="/case-study" exact component={CaseStudy} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default Routes
