import React, { Component } from 'react';
import emma from './../../utils/images/emma-brown.png';

class User extends Component {
  render() {

  	const {title, list} = this.props;

    return (
      <div className='PersonaUser__ctn'>
      	<div>
          <img src={emma} alt="Emma Brown" />  
        </div>
        <div>
          <p class="pink">Emma Brown</p>
          <p>Age 25, Student</p>
          <p>Toronto, Canada</p>
        </div>
      </div>
    );
  }
}

export default User;
