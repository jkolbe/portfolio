import React, { Component } from 'react';
import './training.css'

// https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528

class Training extends Component {

  constructor(){
    super();
    this.state = {
      timeline: [
        {time: '1934', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'},
        {time: '1937', description: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.'},
        {time: '1940', description: 'Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.'},
        {time: '1943', description: 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
        {time: '1956', description: 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
        {time: '1967', description: 'Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.'},
        {time: '2005', description: 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
      ]
    }

  }

  render() {
    return (
      <section id='training' className='Training__ctn full-height'>
        <h2>TRAINING</h2>
        <div className='timeline'>
        </div>
      </section>
    );
  }
}

export default Training;
