import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from '../App';
import About from '../containers/about'
import Training from '../containers/training'
import CaseStudy from '../containers/caseStudy'
import NotFound from '../containers/notFound'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={About} />
      <Route path="/training" exact component={Training} />
      <Route path="/case-study" exact component={CaseStudy} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
