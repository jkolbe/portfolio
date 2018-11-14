import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import events from './../../utils/images/events.png';

class PortfolioItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className='portfolio_item'>
        <Link to={`/case-study/${item.id}`}>
          <figure>
            <img src={events} className="App-logo" alt="logo" />
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}

export default PortfolioItem;
