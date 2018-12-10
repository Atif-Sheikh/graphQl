import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './nav';
import {
  Home
} from './home';

class ReactRouter extends Component {
  render() {
    return (
        <Router>
        <div>
          <Nav/>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default ReactRouter;