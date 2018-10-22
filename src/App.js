import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Tableau from './Tableau/Tableau.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Button color="danger" size="lg">Attractions</Button>

        <Tableau />

      </div>

      //<Route path="/attractions" component={} />
    );
  }
}

export default App;
