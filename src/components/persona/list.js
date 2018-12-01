import React, { Component } from 'react';

class List extends Component {
  render() {

  	const {title, list} = this.props;

    return (
      <div className='PersonaList__ctn'>
      	<h3>{title}</h3>
      	{list && <ul>
      		{list.map((i) => (
      			<li key={i}>{i}</li>
      		))}
      	</ul>}
      </div>
    );
  }
}

export default List;
