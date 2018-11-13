import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PortfolioItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <figure>
        <Link to={`/case-study/${item.id}`}>
          PortfolioItem
        </Link>
      </figure>
    );
  }
}

export default PortfolioItem;
