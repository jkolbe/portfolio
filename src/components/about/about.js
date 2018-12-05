import React, { Component } from 'react';
import me from './../../utils/images/me.jpg';
import './about.css'

class About extends Component {
  render() {
    return (
      <section id='about' className='About__ctn'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xs-12 col-sm-6 d-none d-sm-block'>
              <div className='picture'>
                <img className='img-fluid' src={me} alt="Joanna Kolbe" />
              </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <div className='profile'>
                <h2>About me</h2>
                <p>Hi! I'm Joana, a UX/UI developer based in Toronto and a student of Information program at University of Toronto.
                I am committed to building high quality, functional, and user-friendly experience that empowers its users,
                and makes it easier for them to achieve their goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
