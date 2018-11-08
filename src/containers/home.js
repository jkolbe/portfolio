import React, { Component } from 'react';

import Canvas from './../components/canvas/canvas';

class Home extends Component {
  render() {
    return (
      <div>

        <div className="header__ctn">
          <div className="dotted">
            <Canvas />
          </div>

          <div className="hero">
            <p>UX. CODE. </p>
            <h1>Joanna Kolbe</h1>
            <p>My journey through UX</p>
          </div>
        </div>


        <div>
          <h1>BLAH</h1>
        </div>
      
      </div>

    );
  }
}

export default Home;
