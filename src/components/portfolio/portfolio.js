import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';
import './portfolio.css'

class Portfolio extends Component {

  constructor(){
    super();
    this.state = {
      portfolio: [
        {
          id: 'event-hunter',
          title: 'Connecting Users to Local Events',
          'description': 'Raising the awareness and promotion of local events. Informing users about what’s happening in their neighbourhood so they would never feel like they’re missing out.'},
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
