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
      appName: 'EventFun'
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
          <p>{appName} is an iOS application that aims to raise the awareness and promotion of local event
          by making them more accessible to the public. The product informs users about what is
          happening in their neighbourhood so they would never feel like they're missing out.
          Users can search for a specific event or browse for events that match their preference criteria. {appName} awards points for event attendance and experience sharing that can later be used for discounts.</p>
        </section>

        <section className='competitors'>
          <h2>Competitor Analysis</h2>
          <div className='section_split'>
            <div>
              <p>Before beginning secondary research, we refined our focus to how people find out about local events. Through secondary research we aimed to answer the three aforementioned questions to learn more about our research topic.</p>
              <p>We looked at existing platforms used to find and share events.  More specifically, we explored event sharing websites, social networking websites, articles, and blogs. We then used a consolidation table to summarize our findings. Our consolidation table included three aspects: what the platform is (observations), why it is important (interpretations), and what it means to us (implications).</p>
              <p>A common theme among blogs and social networking sites is the use of weekly lists to share events. For instance, the Toronto subreddit on Reddit and the popular Toronto-based blog, BlogTO, both post weekly lists of events happening in the city. Facebook on the other hand is more social, as users can visit an event page, see events occurring in their area and invite others, and see events their friends plan on attending. Eventbrite displays different types of events happening in the Toronto area and allows users to filter by location, cost, and event type. Bulletin boards and word of mouth were the only ways to discover events offline we explored. </p>
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
