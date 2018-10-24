import React, { Component } from 'react';


class Attraction extends Component {
  constructor(ID, Nom, Date, Prix) {
    this.ID = ID;
    this.Nom = Nom;
    this.Date = Date;
    this.Prix = Prix;
  }

  displayAttraction(){
   return(
     <div className="attraction">
       <h3>{this.nom}</h3>
     </div>
   )

  }


  render(){
    return this.displayAttraction
  }

}

export default Attraction;
