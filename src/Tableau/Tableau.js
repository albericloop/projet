import React, { Component } from 'react';
import Attraction from '../Attraction/Attraction.js';
import myDataAttraction from '../dataAttraction.json';
import Menu from '../Menu/Menu.js';
import '../Tableau.css';
import Popup from "reactjs-popup";
import 'bootstrap/dist/css/bootstrap.min.css';

class Tableau extends Component {
  constructor(props){
    super(props);
    this.attractions = myDataAttraction.length;
    this.item = null;
 }

  render(){

    return (
      <div className="home">
      <br/><br/>
      <h3>Bienvenue sur le site web d'amnistration du parc d'attractions Vauxmoret !</h3>
      </div>
    )

  }
}
export default Tableau;
