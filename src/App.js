import React, { Component } from 'react';
import myDataAttraction from './dataAttraction.json';
import myDataBatiment from './dataBatiment.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
    this.state = {
      dataAttraction: myDataAttraction,
      dataBatiment: myDataBatiment,
      batimentList: []
    }
  }

  render() {
    return (
      <div>
        <div className="App-header">
        <h3>Parc VauxMoret</h3>
        </div>
        <Menu />
        <div className="App">
          <Button color="danger" size="lg">Attractions</Button>
        </div>
      </div>
    )
  }
}

export default App;
