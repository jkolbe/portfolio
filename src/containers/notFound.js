import React, { Component } from 'react';
import Canvas from './../components/canvas/canvas';
import './not-found.css'

class NotFound extends Component {
  render() {
    return (
      <div className='Not_Found__ctn'>
      	<div className="dotted">
          <Canvas id='not-found-canvas' />
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h1>Not Found</h1>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default NotFound;
