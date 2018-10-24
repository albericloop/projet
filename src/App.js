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
import Menu from './Menu/Menu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dataAttraction: myDataAttraction, dataBatiment: myDataBatiment, attractionList: [], batimentList: [] }
  }

  componentDidMount() {
    var attraction = this.state.dataAttraction;
    var tempAttractionList = [];
    for(var i = 0; i < attraction.length; i++) {
    var obj = attraction[i];
        var tempAttraction = new Attraction(obj.ID,obj.Nom,obj.Date,obj.Prix);
        tempAttractionList.push(tempAttraction);
    }
    this.setState({attractionList: tempAttractionList})
	}

  render() {
    return (
      <div>
      <div className="App-header">
      <h3>Parc VauxMoret 3</h3>
      </div>
      <Menu />
       <div className="App">

       <Button color="danger" size="lg">{this.state.dataAttraction.length} Attractions
       </Button>
       <Tableau item="attraction" />

        </div>
      </div>

    )


  }
}

export default App;
