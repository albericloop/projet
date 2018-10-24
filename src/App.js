import React, { Component } from 'react';
import myData from './dataAttraction.json';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Tableau from './Tableau/ViewTableau.js';

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

  start(){

    for(var i = 0; i < myData.length; i++) {
    var obj = myData[i];
        console.log("Name: " + obj.first_name + ", " + obj.last_name);
    }
  }
}

export default App;
