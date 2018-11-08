import React, { Component } from 'react';

import {BrowserRouter as Link } from "react-router-dom";

// import { browserHistory } from 'react-router'
// browserHistory.push('/path/some/where')

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({ open });
  };

  handleLinkClick = () => {
    this.props.history.push("/training")
    // this.props.router.replace('/training');
  }

  render() {
    const {open} = this.state;
    console.log(this.props)

    return (
      <div>

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

export default Nav;
