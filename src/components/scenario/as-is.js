import React, { Component } from 'react';
import ScenarioTable from './table'

import './scenario.css'

/*



*/

class AsIsScenario extends Component {
  constructor(){
    super();
    this.state = {
      labels: [
        {
          display: 'Doing',
          key: 'doing'
        },
        {
          display: 'Thinking',
          key: 'thinking'
        },
        {
          display: 'Feeling',
          key: 'feeling'
        }
      ],
      columns: [
        'finding', 'research', 'commuting', 'attending', 'reflection'
      ],
      data: {
        finding: {
          doing: [
            'Checking Social Media / Email',
            'Talking to friends',
            'Looking around',
            'Active search'
          ],
          thinking: [
            '"Should I go to this event?"',
            '"Will I benefit from this event?" *'
          ],
          feeling: [
            'Excited',
            'Nervous *',
            'Annoyed'
          ]
        },
        research: {
          doing: [
            'Online Search',
            'Check who\'s attending',
            'Check info (price, location, date)',
            'Reviews',
            'check availability on the date',
            'Planning ahead'
          ],
          thinking: [
            '"Can I afford this" *',
            '"This looks interesting"',
            '"Oh! Bob is going, I should as well"'
          ],
          feeling: [
            'Excited',
            'Curious'
          ]
        },
        commuting: {
          doing: [
            'Walk, uber, drive, TTC, bike',
          ],
          thinking: [
            '"How far is it" *',
            '"What\'s the traffic at that time"',
            '"Will it be busy?"',
            '"Can someone else give me a ride"',
            '"I wish it was closer to where I live" *'
          ],
          feeling: [
            'Impatient *',
            'Excited'
          ]
        },
        attending: {
          doing: [
            'Participating',
            'Taking pictures/ videos',
            'Socializing',
            'Listing to Music',
            'Eating & drinking',
            'Learning'
          ],
          thinking: [
            '"I had a long day, should I even go?"',
            '"It\'s really fun here"',
            '"It\'s too crowded, I wanna leave"',
            '"It was so nice to see my friends"',
            '"I\'ve learned a lot!"',
            '"I want another drink"'
          ],
          feeling: [
            'Joyfull',
            'Having fun'
          ]
        },
        reflection: {
          doing: [
            'Talking to friends about the event',
            'Writing a review',
            'Posting on social media',
            'Resting',
            'Planning next event'
          ],
          thinking: [
            '"Was it worth my time / money"'
          ],
          feeling: [
            'Tired',
            'Fulfilled'
          ]
        }
      }
    }
  }

  render() {
    const {data, labels, columns} = this.state
    return (
      <div className='Scenario__ctn'>
        <ScenarioTable data={data} labels={labels} columns={columns} />
        <p className='legend'>* - main pain points</p>
      </div>
    );
  }
}

export default AsIsScenario;
