import React, { Component } from 'react';

import {withRouter, BrowserRouter as Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

// import { browserHistory } from 'react-router'
// browserHistory.push('/path/some/where')

import Button from '@material-ui/core/Button';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';


import './nav.css'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pages: [
        {text: 'Home', href: 'home'},
        {text: 'Blah', href: 'blah'},
        {text: 'About Me', href: 'about'},
      ]
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({ open });
  };

  render() {
    const {open, pages} = this.state;

    return (
      <div className='Nav__ctn'>

        <Button variant='fab' color='inherit' aria-label='Menu' onClick={this.toggleDrawer(true)} >
          <Icon>chevron_right</Icon>
        </Button>

        <Drawer className='Drawer__ctn' open={open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List>
              {pages.map(p => (
                <ListItem key={p.href}>
                  <AnchorLink className='draw' href={`#${p.href}`}>
                    <ListItemText primary={p.text} />
                  </AnchorLink>

                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Nav);
