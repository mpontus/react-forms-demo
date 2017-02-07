import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store';
import Routes from './routes';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <Routes/>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
