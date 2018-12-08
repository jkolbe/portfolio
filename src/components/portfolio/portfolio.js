import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';
import './portfolio.css'

import events from './../../utils/images/events.png';
import syllabus from './../../utils/images/syllabus.png';

class Portfolio extends Component {

  constructor(){
    super();
    this.state = {
      portfolio: [
        {
          id: 'event-hunter',
          title: 'Connecting Users to Local Events',
          description: 'Raising the awareness and promotion of local events. Informing users about what’s happening in their neighbourhood so they would never feel like they’re missing out.',
          image: events
        },
        {
          id: 'inf2169',
          title: 'What was this course about?',
          description: 'Visual representation of the INF2169 - User-Centred Information Systems Development course taught by professor Dan Ryan',
          image: syllabus
        }
      ]
    }
  }

  render() {
    const {portfolio} = this.state;
    return (
      <section id='portfolio' className='Portfolio__ctn'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2>Portfolio</h2>
              {portfolio.map(p => (
                <PortfolioItem key={`portfolio-${p.id}`} item={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
