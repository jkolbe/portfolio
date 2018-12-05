import React, { Component } from 'react';
import './training.css'
import Timeline from './../timeline/timeline'

class Training extends Component {

  constructor(){
    super();

    this.timeline_items = null;
    this.state = {
      timeline: [
        {
          organization: 'Rogers Communications Inc.',
          title: 'Sr. UI/UX Developer',
          time: 'Nov. 2018 - Present',
          points: [
            'Design and develop user interfaces',
            'Build and integrate consistent, efficient components across the product portfolio',
            'Prepare designs, documentation and use case scenarios',
            'Plan and research usability and visual design for product'
          ]
        },
        {
          organization: 'University of Toronto',
          title: 'Master of Information, ISD & UXD',
          'time': 'Sept. 2014 - Present',
          points: [
            'Conduct research projects engaging with each stage of the UXD process - brainstorming, data gathering, analysis, designing, prototyping, and evaluation',
            'Participate in multi-disciplinary teams to analyze, design, and implement innovative and effective information systems'
          ]
        },
        {
          organization: 'Sportsnet',
          title: 'Sr. Web Developer',
          'time': 'July 2017 - Nov. 2018',
          points: [
            'Create and maintain pages and plugins',
            'Implement responsive web design',
            'Improve effectiveness of agile development practices and processes',
            'Monitor overall site stability and performance goals'
          ]
        },
        {
          organization: 'Rogers Communications Inc.',
          title: 'Web Developer',
          'time': 'June 2015 - July 2017',
          points: [
            'Create web interfaces for public facing websites',
            'Design, develop and implement code supporting the customer experience',
            'Create attractive and functional user interface interactions',
            'Participate in project budgeting by providing estimates on development time for key projects'
          ]
        },
        {
          organization: 'CIBC',
          title: 'Production Application Support Analyst',
          'time': 'Jan. 2015 - May 2015',
          points: [
            'Evaluate service requests to ensure adherence to standards and processes',
            'Identify and resolve production problems',
            'Monitor and analyze supported services to identify opportunities for improvement',
            'Implement changes to supporting production applications'
          ]
        },
        {
          organization: 'Set Scouter Inc.',
          title: 'Web Developer',
          'time': 'June 2014 - Feb. 2015',
          points: [
            'Develop new features and modules for current application',
            'Integrate third party APIs with the system',
            'Maintain pages within the WordPress content management system'
          ]
        },
        {
          organization: 'Digital Media Zone',
          title: 'Project Lead and System Support Analyst',
          'time': 'June 2014 - Jan. 2015',
          points: [
            'Supervise project development',
            'Manage, design, build, and maintain software applications',
            'Maintain MySQL database containing sensitive data',
            'Provide statistics for grant reporting, monthly presentations, KPI monitoring, and business intelligence'
          ]
        },
        {
          organization: 'Digital Media Zone',
          title: 'Web Developer',
          'time': 'Sept. 2013 - June 2014',
          points: [
            'Build applications that streamline internal business process',
            'Continually assess information system security and implement measures to protect data',
            'Support the maintenance of SQL based databases',
            'Continually assess information system security and implement measures to protect data'
          ]
        },
        {
          organization: 'Ryerson University',
          title: 'Bachelor of Science, Computer Science',
          'time': 'Sept. 2010 - June 2014',
          points: [
            'Acquire the skills and knowledge necessary to influence the hyperconnected digital landscape',
            'Learn about data structures and algorithms, networks and operating systems',
            'Study software engineering, computer vision, artificial intelligence and platform-based development'
          ]
        }
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
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2>TRAINING</h2>
              <Timeline data={timeline} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Training;
