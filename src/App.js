import React, { Component } from 'react';
import myDataAttraction from './dataAttraction.json';
import myDataBatiment from './dataBatiment.json';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';

import './App.css';
import Tableau from './Tableau/Tableau.js';
import Attraction from './Attraction/Attraction.js';
import Personnel from './Personnel/Personnel.js';
import Maintenance from './Maintenance/Maintenance.js';
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
      <Router>
       <div className="App">
         <Button color="danger" size="lg">
            <Link to="/attractions">{this.state.dataAttraction.length} attractions</Link>
         </Button>
         <Button color="primary" size="lg">
           <Link to="/batiments">Batiments</Link>
         </Button>
         <Button color="success" size="lg">
           <Link to="/personnel">Personnel</Link>
         </Button>
         <Button color="success" size="lg">
           <Link to="/maintenances">Maintenances</Link>
         </Button>

         <Route path="/attractions" component={Attraction} />
         <Route path="/batiment" component={Batiment} />
         <Route path="/personnel" component={Personnel} />
         <Route path="/maintenances" component={Mainenance} />


        </div>
      </Router>
    )


  }
}

export default App;
