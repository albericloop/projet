import React, { Component } from 'react';
import Attraction from './Attraction.js';

class ViewAttraction extends Component {
  constructor(props) {
    this.state = { ID = '', Nom: '', Date: '', Prix: ''}
  }

  fillData(Attraction){
    
  }
  displayAttraction(){
   return(
     <div className="attraction">
       <h3>{this.state.nom}</h3>
     </div>
   )
  }


  render(){
    return this.displayAttraction
  }

}

export default ViewAttraction;
