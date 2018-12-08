import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './scrollTop';

import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'

import Home from '../containers/home';
import EventHunter from '../containers/event-hunter/event-hunter'
import Inf2196 from '../containers/inf2196/inf2196'

import NotFound from '../containers/notFound'

const Routes = () => (
  <Router>
    <ScrollToTop>
      <div className='App__ctn'>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio/event-hunter" exact component={EventHunter} />
          <Route path="/portfolio/inf2169" exact component={Inf2196} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ScrollToTop>
  </Router>
)

export default Routes
