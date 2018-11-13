import React, { Component } from 'react';

import Hero from './../components/hero/hero';
import About from './../components/about/about';

class Home extends Component {
  render() {
    return (
      <div>

        <Hero />


        <div id='blah' className='full-height'>
          <h1>BLAH</h1>
        </div>

        <About />

        <div id='smt' className='full-height'>
          <h1>smt</h1>
        </div>

      </div>

    );
  }
}

export default Home;
