import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Icon from '@material-ui/core/Icon';

import PieChart from '../components/chart/pie';
import BarChart from '../components/chart/bar';
import EmpathyMap from '../components/empathy-map/map';
import AsIsScenario from '../components/scenario/as-is';

import events from './../utils/images/events.png';
import competitors from './../utils/images/competitors.png';
import affinityDiagram from './../utils/images/affinity-diagram.png';
import emma from './../utils/images/emma-brown.png';

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
      appName: 'Event Hunter',
      participationData: [
        { value: 5, label: 'Once a week' },
        { value: 7, label: 'Once a month' },
        { value: 6, label: 'Every couple months' },
        { value: 3, label: 'Once a year' },
      ],
      timeData: [
        { value: 9, label: "I don't look up events" },
        { value: 10, label: '10 min' },
        { value: 1, label: '20 min' },
        { value: 7, label: '30 min or more' },
      ],
      channelsData: {
        labels: ["Meetup", "Eventbrite", "Facebook", "Reddit", "Word of mouth", "Bulletin Board", "Instagram", "Ads", "Other"],
        datasets: [
          { label: "Popularity",
          data: [3, 7, 16, 2, 18, 6, 2, 1, 2] },
          { label: "Effectiveness",
          data: [0, 2, 9, 1, 7, 0, 0, 0, 2] },
        ]
      },
      typesData: {
        labels: ["Seminars", "Networking", "Recreational", "Sport Games", "Parties", "Educational", "Charity", "Art", "Festivals", "Parades", "Engagement", "Other"],
        datasets: [
          { label: "Popularity",
          data: [13, 10, 8, 6, 11, 11, 6, 11, 12, 10, 8, 1] },
        ]
      }
    }
  }

  render() {
    const {steps, appName, participationData, timeData, channelsData, typesData} = this.state;

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
            <div className='content'>
              <p>We conducted a secondary research to better understand event management domain. The analysis involved a variety of different products and event finding methods including Facebook, Word of mouth, Bulletin boards, EventBrite, BlogTO and Reddit.</p>
              <p>Our research concluded with the following findings:</p>
                <ul>
                  <li>
                    <span className='bold'>Many platforms</span>
                    <span> - Users are forced to check multiple platforms to find events. This can be difficult and time consuming.</span>
                  </li>
                  <li>
                    <span className='bold'>Listings vary</span>
                    <span> - Lack of consistency between all the different platforms. Users are missing out on attending events due to lack of awareness.</span>
                  </li>
                  <li>
                    <span className='bold'>Unequal exposure</span>
                    <span> - Smaller events tend to be overshadowed by bigger ones due to the lack of proper advertisement. This can potentially lead to a low event attendance.</span>
                  </li>
                </ul>
            </div>
            <div className='graphic'>
              <img src={competitors} alt="fb, eventbrite, talking with friends, reddit, bulettin board, blogTo" />
            </div>
          </div>
        </section>

        <section className='users'>
          <h2>Primary Research</h2>
          <div className='section_split'>
            <div className='graphic'>
              <img src={affinityDiagram} alt="Affinity Diagram" />
            </div>
            <div className='content'>
              <p>We conducted a series of semi-structure interviews to gain in-depth understaing of the problem this project was attempting to solve. We have also distributed online surveys to suplement our findings with more quantitative data.</p>
              <p>Our questions centered on methods of event finding, reasons for participation and overall levels of satisfaction / dissatisfaction from current methods.</p>
              <p>We also screened our participants based on our previously defined user group: 18 years of age or older Torontonians who attend local events.</p>
              <p>Our research concluded with the following findings:</p>
              <ul className='list-separated'>
                <li>
                  <span className='bold'>Preferred Searching Method</span>
                  <span> - Users show strong preference of finding events through Facebook and word of mouth. Facebook is a popular choice because users can see who will attend the event, and the event itself can be easily added to a calendar.</span>
                </li>
                <li>
                  <span className='bold'>Most Popular Event Types</span>
                  <span> - The top rated event types include Seminars and Conference, Festivals, Art, Parties, and Education oriented events</span>
                </li>
                <li>
                  <span className='bold'>Searching Effort</span>
                  <span> - Most of users spend about 10 minutes looking for events, and are willing to commute up to 1 hour to attend events. </span>
                </li>
              </ul>
            </div>
          </div>
          { /*<div className='diagrams' > 
            <PieChart data={participationData} title='How often do you participate in events?' />
            <PieChart data={timeData} title='How much time do you spend searching for events?' />
            <BarChart data={channelsData} title='Through what channels do you discover events?' />
            <BarChart data={typesData} title='What event types are you interested in?' />
          </div> */
        }
        </section>

        <section className='persona'>
          <h2>Persona</h2>
          <div className='section_split'>
            <div className='content'>
              <p>Based on data gathered through primary research, we were able to develop a user profile to guide us through the rest of our product journey. Our persona, Emma Brown, represents usage patterns, key behaviour, attributes, motivations, and goals of a prospective user.</p>
              <p><strong>Emma Brown</strong> is a 25 years old student who lives in Toronto and wants to find something to do in her spare time. She finds it difficult to search on multiple outlets for events that match her interests. She would like to be more involve in the community and find events more efficiently.</p>
              <div className='list'>
                <p>Motivations</p>
                <ul>
                  <li>Distance</li>
                  <li>Cost</li>
                  <li>Interest</li>
                  <li>Social</li>
                </ul>
              </div>
              <div className='list'>
                <p>Channels Currently Used</p>
                <ul>
                  <li>Facebook</li>
                  <li>Eventbrite</li>
                  <li>Word of Mouth</li>
                  <li>Blog TO</li>
                </ul>
              </div>
            </div>
            <div className='graphic'>
              <img src={emma} alt="Emma Brown" />
            </div>
          </div>
        </section>

        <section className='empathy'>
          <h2>Empathy Map</h2>
          <p>In order to explore multiple dimensions of target users we have decided to develop an emapthy map for our persona - Emma Brown. It helped us understand more about how she is affected by the problem and how she find the existing event finding process.</p>
          <EmpathyMap />
        </section>

        <section className='as-is'>
          <h2>As-Is Scenario</h2>
          <p>Using our persona and the emapthy map, we started to map user experiences. It allowed us to deepen our understanding of what Emma are doing, thinking, and feeling when completing a task. We then identified specific areas for improving the user experience that would address Emma's pain points </p>
          <AsIsScenario />
        </section>

        <section className='needs'>
          <h2>Need Statements</h2>
        </section>

        <section className='ideas'>
          <h2>Big Ideas</h2>
        </section>



      </div>
    );
  }
}

export default CaseStudy;
