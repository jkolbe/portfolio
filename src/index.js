import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './utils/scss/global.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    type: 'dark',
  },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><Routes /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
