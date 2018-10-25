import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Attraction from '../Attraction/Attraction.js';
import myDataAttraction from '../dataAttraction.json';


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

  displayAttraction(){
    let listItem = this.state.attractionList.map((attraction, index) =>
      <li key={index}>
        <Attraction ID={attraction.ID} Nom={attraction.Nom} Date={attraction.Date} Prix={attraction.Prix}/>
        <button onClick={() => {this.remove(index)}}>Remove</button>
        <button onClick={() => {this.remove(index)}}>Modify</button>
      </li>
    );
    return (<ul>{listItem}</ul>);
  }

  render(){
      return (
        <div>
          <button class="add"> Ajouter un(e) nouvel(le) {this.props.item}</button>
          {this.displayAttraction()}
        </div>
      )
  }
}
export default Tableau;
