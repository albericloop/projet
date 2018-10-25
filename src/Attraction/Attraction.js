import React, { Component } from 'react';

class Attraction extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: this.props.ID, Nom: this.props.Nom, Date: this.props.Date, Prix: this.props.Prix}
  }
/*  displayAttraction(){
   return(
     <div className="attraction">
       <h3>{this.state.Nom}</h3>
       <h3>{this.state.Prix}</h3>
     </div>
   )
 }*/
  render(){
    return(
      <div className="Attraction">
        <h3>{this.state.ID}</h3>
        <h3>{this.state.Nom}</h3>
        <h3>{this.state.Date}</h3>
        <h3>{this.state.Prix}</h3>
      </div>
    )
  }

  deleteAttraction(){
  }
}

export default Attraction;
