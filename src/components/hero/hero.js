import React, { Component } from 'react';
import Canvas from '../canvas/canvas';

import './hero.css';

class Hero extends Component {
  render() {
    return (
      <header className="Hero__ctn" id='home'>

        <div className="dotted">
          <Canvas id='dotted_canvas' />
        </div>

        <div className="hero">
          <p>UX. CODE. </p>
          <h1>Joanna Kolbe</h1>
          <p>My journey through UX</p>
        </div>
      </header>
    );
  }
}

export default Hero;
