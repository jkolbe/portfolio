import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';
import './portfolio.css'

class Portfolio extends Component {

  constructor(){
    super();
    this.state = {
      portfolio: [
        {id: 1, title: 'Connecting Users to Local Events', 'description': 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
      ]
    }
  }

  render() {
    const {portfolio} = this.state;
    return (
      <section id='portfolio' className='Portfolio__ctn'>
        <h2>Portfolio</h2>
        {portfolio.map(p => (
          <PortfolioItem key={`portfolio-${p.id}`} item={p} />
        ))}
      </section>
    );
  }
}

export default Portfolio;
