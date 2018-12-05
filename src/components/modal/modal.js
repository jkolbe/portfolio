import React, { Component } from 'react';
import './modal.css'

class About extends Component {

  render() {
    const { open, closeModal, image } = this.props;

    return (
      <div className={`Modal__ctn ${open ? '--open' : ''}`}>
        <span className="close" onClick={closeModal}>&times;</span>
        {image && <img className="content" src={image} />}
      </div>
    );
  }
}

export default About;
