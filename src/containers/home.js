import React, { Component } from 'react';

import Hero from './../components/hero/hero';
import About from './../components/about/about';
import Training from './../components/training/training';
import Portfolio from './../components/portfolio/portfolio';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Training />
        <Portfolio />
      </div>
    );
  }
}

export default Home;
