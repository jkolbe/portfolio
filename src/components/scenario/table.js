import React, { Component } from 'react';

import './scenario.css'

class ScenarioTable extends Component {
  constructor(){
    super();
    this.state = {}
  }
  
  render() {
    const {data, labels, columns} = this.props;

    return (
      <div className='ScenarioTable__ctn'>
        <table>
          <thead>
            <tr>
              <th>Steps</th>
              <th>Finding Out</th>
              <th>Research</th>
              <th>Commuting</th>
              <th>Attending</th>
              <th>Reflection</th>
            </tr>
          </thead>
          <tbody>
            {labels.map(l => (
              <tr key={l.key}>
                <td data-th='Step'>{l.display}</td>
                {columns.map(col => (
                  <td key={col} data-th={col}>
                    <ul>
                    {data[col][l.key].map((item, i) => (<li key={`${col}-${i}`}>{item}</li>))}
                    </ul>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScenarioTable;
