import React, { Component } from 'react';


class ViewAttraction extends Component {
  constructor(ID, Nom, Date, Prix) {

  }

  displayAttraction(){
   return(
     <div className="attraction">
       <h3>{this.nom}</h3>
     </div>
   )

  }


  render(){
    return (<div>Test</div>)
  }

}

export default ViewAttraction;
