import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Icon from '@material-ui/core/Icon';

import events from './../utils/images/events.png';
import competitors from './../utils/images/competitors.png';

import './case-study.css';

/*
  http://christinarichardson.ca/p3.html
  http://christinarichardson.ca/zumba.html
  http://simonpan.com/independent-living-centre-nsw-case-study/
  https://docs.google.com/presentation/d/1aKJJQ2G2AEBSGfZBzC7o5sVVqTLVefKa040QZOEZ7Vg/edit#slide=id.g4562bdc725_0_0
  compare_arrows
  <Icon className='icon fas fa-arrows-alt-h' />
  <Icon className='icon'>compare_arrows</Icon>
*/

class CaseStudy extends Component {

  constructor(){
    super();
    this.state = {
      steps: ['Research.', 'Analysis.', 'Design.', 'Evaluation.'],
      appName: 'Event Hunter'
    }
  }

  render() {
    const {steps, appName} = this.state;

    return (
      <div className='Case_Study__ctn'>

        <section className='header'>
          <div className='content'>
            <h1>Connecting Users to Events</h1>

            <ReactTypingEffect
              className='type'
              speed={80}
              eraseDelay={500}
              text={steps}
              cursorClassName='type-cursor'
            />

          </div>
          <div className='image'>
            <img src={events} className="App-logo" alt="logo" />
          </div>
        </section>

        <section className='project'>
          <h2>The project</h2>
          <p>{appName} is an iOS application that aims to raise awareness and promote local events
          by making them more accessible to the public. The product informs users about what is
          happening in their neighbourhood so they would never feel like they're missing out.
          Users can search for a specific event or browse for events that match their preference criteria. {appName} is a centralized application that combines events from all existing platforms.</p>
        </section>

        <section className='competitors'>
          <h2>Secondary Research</h2>
          <div className='section_split'>
            <div>
              <p>We conducted a secondary research to better understand event management domain. The analysis involved a variety of different products and event finding methods including Facebook, Word of mouth, Bulletin boards, EventBrite, BlogTO and Reddit.</p>
              <p>Our research concluded with the following findings:</p>
                <ul>
                  <li>
                    <span class='bold'>Many platforms</span>
                    <span> - Users are forced to check multiple platforms to find events. This can be difficult and time consuming.</span>
                  </li>
                  <li>
                    <span class='bold'>Listings vary</span>
                    <span> - Lack of consistency between all the different platforms. Users are missing out on attending events due to lack of awareness.</span>
                  </li>
                  <li>
                    <span class='bold'>Unequal exposure</span>
                    <span> - Smaller events tend to be overshadowed by bigger ones due to the lack of proper advertisement. This can potentially lead to a low event attendance.</span>
                  </li>
                </ul>
            </div>
            <div>
              <img src={competitors} alt="fb, eventbrite, talking with friends, reddit, bulettin board, blogTo" />
            </div>
          </div>
        </section>

        <section className='users'>
          <h2>User Research</h2>
        </section>

        <section className='persona'>
          <h2>Persona</h2>
        </section>

      </div>
    );
  }
}

export default CaseStudy;
