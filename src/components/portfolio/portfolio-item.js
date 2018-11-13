import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import balloons from './../../utils/images/balloons.png';

class PortfolioItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className='portfolio_item'>
        <Link to={`/case-study/${item.id}`}>
          <figure>
            <img src={balloons} className="App-logo" alt="logo" />
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
