import React, { Component } from 'react';

class Attraction extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: '', Nom: '', Date: '', Prix: ''}
  }

  fillData(Attraction){

  }
  displayAttraction(){
   return(
     <div className="attraction">
       <h3>{this.state.Nom}</h3>
     </div>
   )
  }


  render(){
    return (<div>Test</div>)
  }

}

export default Attraction;
