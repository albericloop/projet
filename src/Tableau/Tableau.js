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
      <h3>Bienvenue sur le site web d'amnistration du parc d'attractions Vauxmoret !</h3>
      <p>Nous disposons actuellement de 5 attractions, 4 bâtiments et 5 employés.</p>
      <p>La prochaine maintenance est prévue pour le 3 novembre 2018.</p>
      </div>
    )

  }
}
export default Tableau;
