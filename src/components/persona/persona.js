import React, { Component } from 'react';

import Bio from './bio';
import List from './list';
import Bar from './bar';

import './persona.css'

class Persona extends Component {

  constructor(){
    super();
    this.state = {
      influences: [
        'Lives in Toronto',
        'Attends events near her home',
        'Likes to build social networks',
        'Wants to do something in her spare time',
        'Has a budget',
        'Wants to be more involved in her community'
      ],
      needs: [
        "Doesn't want to misss out on events",
        "Wants to find something that is inexpensive",
        "Wants to socialize and enjoy her weekend",
        "Wants to find events that align with her interests",
      ],
      motivations: [
        {name: 'Distance', value: 80 },
        {name: 'Cost', value: 90 },
        {name: 'Interest', value: 100 },
        {name: 'Social', value: 100 }
      ],
      channels: [
        {name: 'Facebook', value: 80 },
        {name: 'Eventbrite', value: 40 },
        {name: 'Word of Mouth', value: 90 },
        {name: 'Bulletin Board', value: 30 }
      ]
    }
  }

  render() {
    const {influences, needs, motivations, channels} = this.state;

    return (
      <div className='Persona__ctn'>
        <div className="col-8">
          <Bio />
          <List title='Influences' list={influences} />
          <List title='Needs' list={needs} />
        </div>
        <div className="col-4">
          <Bar id='motivations' title='Motivations' data={motivations} />
          <Bar id='channels' title='Channels' data={channels} />
        </div>
      </div>

    );
  }
}

export default Persona;
