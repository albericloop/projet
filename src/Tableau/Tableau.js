import React, { Component } from 'react';
import Attraction from ./Attraction.js
import Batiment from ./Batiment.js
import Personnel from ./Personnel.js


class Tableau extends Component {
  constructor(props){
    super(props);
    this.state = {
      attractions: displayed,
      batiments: null,
      personnel: null,
      maintenance: null,
      statistiques: null,
    }

}

displayAttractions(){
  this.setState({attractions: displayed});
  if(this.state.attraction){
    return(
      <button onClick={}>Ajouter une attraction</button>
    )
  }
}

displayBatiments(){
  this.setState({batiments: displayed});
  if(this.state.batiments){
    return(
      <button onClick={}>Ajouter un nouveau bâtiment</button>
    )
  }
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
}


render(){
  return(
    {this.props.name}
    <button onClick={this.displayAttractions}>Attractions</button>
    <button onClick={this.displayBatiments}>Bâtiments</button>
    <button onClick={this.displayPersonnel}>Personnel</button>
    <button onClick={this.displayMaintenance}>Maintenance</button>
    <button onClick={this.displayStatistiques}>Statistiques</button>
  )
}

export default Tableau;
