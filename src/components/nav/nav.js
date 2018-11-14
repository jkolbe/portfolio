import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import './nav.css'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      homePage: !(props.location.pathname.includes("case-study")),
      pages: [
        {text: 'Home', href: 'home'},
        {text: 'About Me', href: 'about'},
        {text: 'Training', href: 'training'},
        {text: 'Portfolio', href: 'portfolio'},
      ]
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        homePage: !(this.props.location.pathname.includes("case-study"))
      })
    }
  }

  toggleDrawer = (open) => () => {
    this.setState({ open });
  };

  render() {
    const {open, pages, homePage} = this.state;

    return (
      <nav className='Nav__ctn'>

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
              {homePage && pages.map(p => (
                <ListItem key={p.href}>
                  <AnchorLink className='draw' href={`#${p.href}`}>
                    <ListItemText primary={p.text} />
                  </AnchorLink>
                </ListItem>
              ))}
              {!homePage && <ListItem>
                  <Link className='draw' to="/">
                    <ListItemText primary='Back' />
                  </Link>
                </ListItem>
              }
            </List>
          </div>
        </Drawer>
      </nav>
    );
  }
}

export default withRouter(Nav);
