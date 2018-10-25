import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Attraction from '../Attraction/Attraction.js';
import myDataAttraction from '../dataAttraction.json';
import './Tableau.css';


class Tableau extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataAttraction: myDataAttraction,
      attractionList: []
    }
    this.item = null;
    //this.state = {listAttractions: [], listBatiments: [], listPersonnel: [], maintenances: [], statistiques: [],}
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
      <li key={index}>
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
    if(this.props.item == "attraction"){
      return (<div>{this.displayAttractions()}</div>)
    }

  }
}
export default Tableau;
