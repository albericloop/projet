import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Attraction from '../ViewAttraction/ViewAttraction.js';


class ViewTableau extends Component {
  constructor(props){
    super(props);
    this.type = null;
    this.state = {
      listAttractions: [],
      listBatiments: [],
      listPersonnel: [],
      maintenances: [],
      statistiques: [],
    }
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
     <Button color="secondary" onClick={this.addAttraction}>+ Ajouter une attraction</Button>
  )
}

/*displayBatiments(){
  let listItem = this.state.listBatiments.map((batiment, index) =>
    <li key={index}>
      <Batiment />

      <Button close
              onClick={() => this.setState(
                {listAttractions: this.state.listAttractions.slice(0, -1)}
              }>
      </Button>

    </li>
  );
}

displayPersonnel(){
  this.setState({personnel: displayed});
  if(this.state.personnel){
    return(
      <button onClick={}>Ajouter un nouvel employé</button>
    )
  }
}

displayMaintenance(){
  this.setState({maintenance: displayed});
  if(this.state.maintenance){
    return(
      <button onClick={}>Programmer une  nouvelle maintenance</button>
    )
  }
}

displayStatistiques(){
  this.setState({statistiques: displayed});
  if(this.state.statistiques){
    return(

    )
  }
} */

  render(){
    return this.displayAttractions
  }

}
export default ViewTableau;
