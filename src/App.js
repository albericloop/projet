import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
=======
import myDataAttraction from './dataAttraction.json';
import myDataBatiment from './dataBatiment.json';

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
>>>>>>> e05cad3af11764d182d2f6f66130613b4fbb060f
import { Button } from 'reactstrap';

import './App.css';
import ViewTableau from './Tableau/ViewTableau.js';
import Attraction from './Attraction.js';
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
<<<<<<< HEAD
         <Button color="danger" size="lg">Attractions</Button>
        
    );
=======
      <div className="App">

        <Button color="danger" size="lg">Attractions</Button>
        <Button color="danger" onClick={()=>this.loadAttractions()} size="lg">as{this.state.dataAttraction.length}</Button>
      </div>
>>>>>>> e05cad3af11764d182d2f6f66130613b4fbb060f

      //<Route path="/attractions" component={} />

  }
}

export default App;
