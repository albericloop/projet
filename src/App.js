import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';

import './App.css';
import ViewTableau from './Tableau/ViewTableau.js';

class App extends Component {
  render() {
    return (
         <Button color="danger" size="lg">Attractions</Button>
        
    );

      //<Route path="/attractions" component={} />

  }
}

export default App;
