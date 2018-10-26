import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Attraction from '../Attraction/Attraction.js';
import myDataAttraction from '../dataAttraction.json';
import myDataBatiment from '../dataBatiment.json';
import myDataPersonnel from '../dataPersonnel.json';
import myDataMaintenance from '../dataMaintenance.json';
import './Tableau.css';


class Tableau extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataAttraction: myDataAttraction, attractionList: [],
      dataBatiment: myDataBatiment, batimentList: [],
      dataPersonnel: myDataPersonnel, personnelList: [],
      dataMaintenance: myDataMaintenance, maintenanceList: [],
    }
    this.item = null;

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

  addAttraction(){
    this.setState({
      listAttractions: this.state.listAttractions.concat(new Attraction)
    })
  }

  remove(){
    this.setState({
      attractionList: this.state.attractionList.slice(0, -1)
    })
  }

  displayAttractions(){
    let listItem = this.state.attractionList.map((attraction, index) =>
      <li key={index} class="attraction">
        <Attraction ID={attraction.ID} Nom={attraction.Nom} Date={attraction.Date} Prix={attraction.Prix}/>
        <button onClick={() => {this.remove(index)}}>Remove</button>
        <button onClick={() => {this.remove(index)}}>Modify</button>
      </li>
    );
    return (<div className='right'><button class="add"> Ajouter une nouvelle {this.props.item}</button>
            <ul>{listItem}</ul></div>);
  }

  displayBatiments(){
    return (<div className='right'><button class="add"> Ajouter un nouveau {this.props.item}</button></div>);
  }

  render(){
    if (this.props.item == "batiment"){
      return(<div>{this.displayBatiments()}</div>)
    }
    else if(this.props.item == "attraction"){
      return (<div>{this.displayAttractions()}</div>)
    }
    else if(this.props.item == "personnel"){
      return (<div>{this.displayPersonnel()}</div>)
    }
    else if(this.props.item == "maintenance"){
      return (<div>{this.displayMaintenance()}</div>)
    }
    else{return null}
  }
}
export default Tableau;
