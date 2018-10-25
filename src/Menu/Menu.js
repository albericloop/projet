import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css';
import Attraction from '../Attraction/Attraction.js';
import Batiment from '../Batiment/Batiment.js';
import Personnel from '../Personnel/Personnel.js';
import Maintenance from '../Maintenance/Maintenance.js';
import { Button } from 'reactstrap';

class Menu extends Component {
  render(){
    return(
      <Router>
        <div className="Menu">
        <Button class="btn btn-primary" color="danger" size="lg">
           <Link to="/attractions">Attractions</Link>
        </Button><br/>
        <Button outline color="primary" size="lg">
          <Link to="/batiments">Batiments</Link>
        </Button><br/>
        <Button color="success" size="lg">
          <Link to="/personnel">Personnel</Link>
        </Button><br/>
        <Button color="success" size="lg">
          <Link to="/maintenances">Maintenances</Link>
        </Button><br/>

        <Route path="/attractions" />
        <Route path="/batiment" component={Batiment} />
        <Route path="/personnel" component={Personnel} />
        <Route path="/maintenances" component={Maintenance} />

        </div>
      </Router>
    )
  }
}

export default Menu;
