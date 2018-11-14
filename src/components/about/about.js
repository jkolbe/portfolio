import React, { Component } from 'react';

// import me from './../../utils/images/me.jpg';
import './about.css'

class About extends Component {
  render() {
    return (
      <section id='about' className='About__ctn'>
        <div className='picture'>
          {/*<img src={me} alt="Joanna Kolbe" />*/}
        </div>
        <div className='profile'>
          <h2>About me</h2>
          <p>Hi! I'm Joana, a UX/UI developer based in Toronto and a student of Information program at University of Toronto.
          I am committed to building high quality, functional, and user-friendly experience that empowers its users,
          and makes it easier for them to achieve their goals.</p>
        </div>
      </section>
    );
  }
}

export default About;
