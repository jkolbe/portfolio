import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'

// import App from '../App';
import Home from '../containers/home';
import About from '../containers/about'
import Training from '../containers/training'
import CaseStudy from '../containers/caseStudy'
import NotFound from '../containers/notFound'

const Routes = () => (
  <Router>
    <div className='App__ctn'>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/training" exact component={Training} />
        <Route path="/case-study" exact component={CaseStudy} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default Routes
