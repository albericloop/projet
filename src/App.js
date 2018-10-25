import React, { Component } from 'react';
import myDataAttraction from './dataAttraction.json';
import myDataBatiment from './dataBatiment.json';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';

import './App.css';
import Tableau from './Tableau/Tableau.js';
import Attraction from './Attraction/Attraction.js';
import Batiment from './Batiment/Batiment.js';
import Personnel from './Personnel/Personnel.js';
import Maintenance from './Maintenance/Maintenance.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAttraction: myDataAttraction,
      dataBatiment: myDataBatiment,
      batimentList: []
    }
  }
/*
  componentDidMount() {
    var attraction = this.state.dataAttraction;
    var list = [];
    console.log("list1: " + attraction.length);
    for(var i = 0; i < attraction.length; i++) {
        var obj = attraction[i];
        list = list.concat({ID: obj.ID, Nom: obj.Nom, Date: obj.Date, Prix: obj.Prix});
    }
    this.setState({
      attractionList: list
    })
	}

  displayAttraction(){
    let listItem = this.state.attractionList.map((attraction, index) =>
      <li key={index}>
        <Attraction ID={attraction.ID} Nom={attraction.Nom} Date={attraction.Date} Prix={attraction.Prix}/>
        <button onClick={() => {this.remove(index)}}>Remove</button>
        <button onClick={() => {this.remove(index)}}>Modify</button>
      </li>
    );
    return (<ul>{listItem}</ul>);
  }

  remove(){
    this.setState({
      attractionList: this.state.attractionList.slice(0, -1)
    })
  }
*/


  render() {
    return (
      <div>
        <div className="App-header">
        <h3>Parc VauxMoret 3</h3>
        </div>
        <div className="App">
          <Button color="danger" size="lg">Attractions</Button>
          <Tableau item="attraction" />

        </div>
      </div>
    )
  }
}

export default App;
