import React, { Component } from 'react';
import emmacirc from './../../utils/images/emma-circle.png';
import './map.css'

class EmpathyMap extends Component {
  render() {
    return (
      <div className='Empathy__ctn'>
      	<div className='tile__ctn'>
	        <div className='tile'>
	        	<div className='tile-title'>Says</div>
	        	<div className='tile-body'>
	        		<ul>
	        			<li>Central spot to find events </li>
	        			<li>Willing to commute 1hr. or less</li>
	        			<li>Likes hearing about events rather than searching</li>
	        			<li>Finds events enjoyable</li>
	        			<li>Willing to pay for events within reason </li>
	        		</ul>
	        	</div>
	        </div>
	        <div className='tile'>
	        	<div className='tile-title'>Does</div>
	        	<div className='tile-body'>
	        		<ul>
	        			<li>Uses Facebook to find events</li>
	        			<li>Goes with friends and colleagues</li>
	        			<li>Plans ahead </li>
	        			<li>Plans a safe ride home after the event</li>
	        			<li>Attends events</li>
	        		</ul>
	        	</div>
	        </div>
	    </div>
	    <div className='user__ctn'>
	        <div className='user'>
	        	<img src={emmacirc} alt="Emma Brown" />
	        	<p>Emma Brown<br/>25 years old<br/>Student</p>
	        </div>
	    </div>
	    <div className='tile__ctn'>
	        <div className='tile'>
	        	<div className='tile-title'>Thinks</div>
	        	<div className='tile-body'>
	        		<ul>
	        			<li>“Is it too expensive?”</li>
	        			<li>Wishes her friends were here</li>
	        			<li>“It [the event] was informative”</li>
	        			<li>“I wish someone told me about this event”</li>
	        			<li>“why can’t I find it easily”</li>
	        			<li>information overload</li>
	        		</ul>
	        	</div>
	        </div>
	        <div className='tile'>
	        	<div className='tile-title'>Feels</div>
	        	<div className='tile-body'>
	        		<ul>
	        			<li>Excited about going</li>
	        			<li>Frustrated that there is no easy way to find events</li>
	        			<li>Stressed about spending money and wasting time searching for events</li>
	        			<li>F.O.M.O. (Fear of missing out)</li>
	        		</ul>
	        	</div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default EmpathyMap;
