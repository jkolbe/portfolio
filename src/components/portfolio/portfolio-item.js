import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PortfolioItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className='portfolio_item'>
        <Link to={`/portfolio/${item.id}`}>
          <figure>
            <img src={item.image} className="App-logo" alt="logo" />
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
