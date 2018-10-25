import React, { Component } from 'react';

class Batiment extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: this.props.ID, Nom: this.props.Nom, Date: this.props.Date}
  }
  render(){
    return(
      <div className="Batiment">
        <h3>{this.state.ID}</h3>
        <h3>{this.state.Nom}</h3>
        <h3>{this.state.Date}</h3>
      </div>
    )
  }
}

export default Batiment;
