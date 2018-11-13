import React, { Component } from 'react';
import Canvas from '../canvas/canvas';

import './hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="Hero__ctn">

        <div className="dotted">
          <Canvas id='dotted_canvas' />
        </div>

        <div className="hero">
          <p>UX. CODE. </p>
          <h1>Joanna Kolbe</h1>
          <p>My journey through UX</p>
        </div>
      </div>
    );
  }
}

export default Hero;
