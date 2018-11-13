import React, { Component } from 'react';
import './training.css'

// https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528

class Training extends Component {

  constructor(){
    super();

    this.timeline_items = null;
    this.state = {
      timeline: [
        {title: 'University of Toronto', time: '1934', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'},
        {title: 'University of Toronto', time: '1937', description: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.'},
        {title: 'University of Toronto', time: '1940', description: 'Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.'},
        {title: 'University of Toronto', time: '1943', description: 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
        {title: 'University of Toronto', time: '1956', description: 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
        {title: 'University of Toronto', time: '1967', description: 'Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.'},
        {title: 'University of Toronto', time: '2005', description: 'In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.'},
      ]
    }

  }

  componentDidMount() {
    window.addEventListener('load', this.animateTimeline);
    window.addEventListener('resize', this.animateTimeline);
    window.addEventListener('scroll', this.animateTimeline);

    try {
      this.timeline_items = document.querySelectorAll('.timeline li');
    } catch (e) {
        console.log(e)
    }
  }


  componentWillUnmount() {
    window.removeEventListener('load', this.animateTimeline);
    window.removeEventListener('resize', this.animateTimeline);
    window.removeEventListener('scroll', this.animateTimeline);
  }

  animateTimeline = () => {
    console.log(this.timeline_items)
    for (var i = 0; i < this.timeline_items.length; i++) {
      if (this.isElementInViewport(this.timeline_items[i])) {
        this.timeline_items[i].classList.add("in-view");
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
    const {timeline} = this.state;

    return (
      <section id='training' className='Training__ctn'>
        <h2>TRAINING</h2>
        <div className='timeline'>
          <ul>
            {timeline.map((t, i) => (
              <li key={`timeline${i}`}>
                <div className='timeline_element'>
                  <h3 className='title'>{t.title}</h3>
                  <div className='content'>
                    <time>{t.time}</time>
                    {t.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Training;
