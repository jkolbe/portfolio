import React, { Component } from 'react';

class Bar extends Component {

	constructor(){
    	super();
    	this.items = null;
    }

	componentDidMount() {
	    window.addEventListener('load', this.animate);
	    window.addEventListener('scroll', this.animate);



	    try {
	      this.items = document.querySelectorAll(`#${this.props.id} .bar__ctn`);
	      console.log('items', this.items)
	    } catch (e) {
	        console.log(e)
	    }
	}

	componentWillUnmount() {
    	window.removeEventListener('load', this.animate);
    	window.removeEventListener('scroll', this.animate);
  	}

  	animate = () => {
  		for (var i = 0; i < this.items.length; i++) {
			if (this.isElementInViewport(this.items[i])) {
				this.items[i].classList.add("in-view");
			}
		}
  	}

  	isElementInViewport = (el) => {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	  }


  	render() {
  		const {id, title, data} = this.props;

	    return (
	     	<div id={id} className='PersonaBar__ctn'>
	      		<h3>{title}</h3>
				{data.map(d => {
					return (<div key={d.name} className='bar__ctn'>
						<p className='bar-title'>{d.name}</p>
						<div className='bar_wrp'>
							<div style={{width: d.value + '%'}} className='bar'></div>
						</div>
					</div>)
				})}
	      	</div>
	    );
  	}
}

export default Bar;
