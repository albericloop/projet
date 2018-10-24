import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Attraction from '../Attraction/Attraction.js';


class Tableau extends Component {
  constructor(props){
    super(props);
    this.item = null;
    //this.state = {listAttractions: [], listBatiments: [], listPersonnel: [], maintenances: [], statistiques: [],}
 }

addAttraction(){
  this.setState({
    listAttractions: this.state.listAttractions.concat(new Attraction)
  })
}



displayAttractions(){
  let listItem = this.state.listAttractions.map((attraction, index) =>
    <li key={index}>
      <Attraction />

      <Button close
              onClick={() => this.setState(
                {listAttractions: this.state.listAttractions.slice(0, -1)}
              )}>
      </Button>

    </li>
  );
  return (
     <Button color="secondary">+ Ajouter une attraction</Button>
  )
}

  render(){
    return (
      <button class="add"> Ajouter un(e) nouvel(le) {this.props.item}</button>
    )
  }

}
export default Tableau;
