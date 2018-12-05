import React, { Component } from 'react';
import './timeline.css'

class Timeline extends Component {
  render() {

    const {data} = this.props;

    return (
      <div className='Timeline__ctn'>
        <ul className="timeline">
          {data.map((t, i) => (
            <li key={`timeline-elem-${i}`}>
              <div className="timeline-badge"></div>
              <div className="timeline-panel">
                <h3 className="organization">{t.organization}</h3>
                <div className="timeline-body">
                  <p className='title'>{t.title}</p>
                  <time>{t.time}</time>
                  {t.points && <ul className='description'>
                    {t.points.map((p, j) => (<li key={`timeline${i}-${j}`}>{p}</li>))}
                  </ul>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Timeline;
