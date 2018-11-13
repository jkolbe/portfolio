import React, { Component } from 'react';

import {withRouter, BrowserRouter as Link } from "react-router-dom";

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
      open: true
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({ open });
  };

  handleLinkClick = () => {
    // console.log(this.props)
    // this.props.history.push("/training");

    const elem = document.getElementById("about");
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = elem.getBoundingClientRect();
    const offset = elemRect.top - bodyRect.top;


    // console.log('offset', offset)
    setTimeout(() => {
      window.scrollTo(0, offset);
    }, 0);

    // elmnt.scrollIntoView(true);
    // console.log(elmnt)

  }


  render() {
    const {open} = this.state;

    return (
      <div className='Nav__ctn'>

        <Button variant='fab' color='inherit' aria-label='Menu' onClick={this.toggleDrawer(true)} >
          <Icon>menu</Icon>
        </Button>

        <Drawer open={open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text} onClick={this.handleLinkClick}>
                  <ListItemIcon><Icon>star</Icon></ListItemIcon>
                  <ListItemText primary={text} />
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
