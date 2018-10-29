import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import '../Tableau.css';
import Popup from "reactjs-popup";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TableauStatistiques extends Component {


  displayStats(){
    var ajd = new Date, num = ajd.getDate(), day = ajd.getDay(), month = ajd.getMonth(), hier = num-1, avant=num-2;
    var lastdays = [" ", " ", " "];
    var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aoüt", "Septembre", "Octobre", "Novembre", "Décembre"];

    lastdays[0] = days[day - 1] + " " + num + " " + months[month];
    if(day==1){
      if(num==1){
        lastdays[1] = "Dimanche" + " " + 30 + months[month-1]
        lastdays[2] = "Samedi" + " " + 29 + months[month-1]
      }
      else if (num==2) {
        lastdays[1] = days[6] + " " + hier + " " + months[month]
        lastdays[2] = days[5] + " " + 30 + " " + months[month-1]
      }
      else {
        lastdays[1] = days[6] + " " + hier + " " + months[month]
        lastdays[2] = days[5] + " " + avant + " " + months[month]
      }
    }
    else if(day==2){
      if(num==1){
        lastdays[1] = "Lundi" + " " + 30 + " " + months[month-1]
        lastdays[2] = "Dimanche" + " " + 29 + " " + months[month-1]
      }
      else if(num==2){
        lastdays[1] = "Lundi" + " " + "1er" + " " + months[month]
        lastdays[2] = "Dimanche" + " " + 30 + " " + months[month-1]
      }
      else {
        lastdays[1] = "Lundi" + " " + hier + " " + months[month]
        lastdays[2] = "Dimanche" + " " + avant + " " + months[month]
      }
    }
    else {lastdays[1] = days[day - 2] + " " + hier + " " + months[month]
          lastdays[2] = days[day - 3] + " " + avant + " " + months[month]
        }


    return(
      <div>
      <br/>
      <table className="stats">
        <tr>
         <th>Journée</th> <th>Nombre de Visiteurs</th> <th>Recette</th>
        </tr>
        <tr>
          <td>{lastdays[0]} (Aujourd'hui)</td> <td>54 (pour l'instant)</td> <td>994€</td>
        </tr>
        <tr>
          <td>{lastdays[1]}</td> <td>172</td><td>2458€</td>
        </tr>
        <tr>
          <td>{lastdays[2]}</td><td>146</td><td>1892€</td>
        </tr>
       </table>
       </div>
     )
  }


  render(){

    return (
      <div className="middle">{}
      <h5>{this.displayStats()}</h5>

      </div>
    )
  }
}

export default TableauStatistiques;
