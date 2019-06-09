import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <div>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" exact={true} component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
