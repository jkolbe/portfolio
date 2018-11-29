import React, { Component } from 'react';

import emma from './../../utils/images/emma-transparent.png';

import './needs.css'

class Needs extends Component {

  constructor() {
    super();
    this.state = {
      needs: [
        {
          need: 'reduce the number of platforms I have to check in order to find events',
          reason: 'I can save time and focus on myself'
        },
        {
          need: 'find events based on my interests/tailored to me ',
          reason: "I don't waste time looking at things I'm not interested in"
        },
        {
          need: 'find events located near me',
          reason: 'I can save time on commuting to events'
        },
        {
          need: 'be reminded about an event I was planning on attending',
          reason: 'I can focus on other things'
        }
      ]
    }
  }

  render() {
    const {needs} = this.state;
    return (
      <div className='Needs__ctn'>
        <div className='user'>
          <img src={emma} alt="Emma Brown" />
        </div>
        <div className='needs'>
          {needs.map((n, i) => (
            <div key={`need-${i}`} class="need">
              <p><span className='template'>I need a way to</span> <span className='content'>{n.need}</span> <span className='template'>so that</span> <span className='content'>{n.reason}.</span></p>
            </div>
          ))}
          
        </div>
      </div>
    );
  }
}

export default Needs;
