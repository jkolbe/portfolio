import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './footer.css'

class Footer extends Component {

  constructor() {
    super();

    this.state = {
      links: [
        {link:'mailto:joannakolbe@gmail.com', icon: 'fas fa-envelope'},
        {link:'https://www.linkedin.com/in/joannakolbe/', icon: 'fab fa-linkedin-in'},
        {link:'https://github.com/jkolbe', icon: 'fab fa-github'},
      ]
    }
  }

  render() {
    return (
      <footer className='Footer__ctn'>
        <div className='footer_icons'>
          {this.state.links.map(l => (
            <a target='_blank' href={l.link}>
              <Icon fontSize='large' className={l.icon} />
            </a>
          ))}
        </div>
        <p>© 2018 | designed and developed by Joanna Kolbe</p>
      </footer>
    );
  }
}

export default Footer;
