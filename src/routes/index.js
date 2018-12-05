import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'

import Home from '../containers/home';
import CaseStudy from '../containers/case-study'
import EventHunter from '../containers/case-study/event-hunter'
import NotFound from '../containers/notFound'

const Routes = () => (
  <Router>
    <div className='App__ctn'>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/case-study/old" exact component={CaseStudy} />
        <Route path="/case-study/event-hunter" exact component={EventHunter} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default Routes
