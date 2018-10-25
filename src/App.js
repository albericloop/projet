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
      attractionList: [],
      batimentList: []
    }
  }

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
        <Attraction ID={attraction.ID} Nom={attraction.Nom} Date={attraction.Date} Prix={index}/>
        <button onClick={() => {this.remove(index)}}>Remove</button>
        <button onClick={() => {this.remove(index)}}>Modify</button>
      </li>
    );
    return (<ul>{listItem}</ul>);
  }

  render() {
    return (
      <Router>
       <div className="App">
         <Button color="danger" size="lg">
            <Link to="/attractions">Attractions</Link>
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
         <Route path="/maintenances" component={Maintenance} />

         {this.displayAttraction()}

        </div>
      </Router>
    )
  }
}

export default App;
