import React, { Component } from 'react';

class Attraction extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: this.props.ID, Nom: this.props.Nom, Date: this.props.Date, Prix: this.props.Prix}
  }
  render(){
    return(
      <div className="Attraction">
        <h4>{this.state.ID}</h4>
        <h3>{this.state.Nom}</h3>
        <h4>{this.state.Date}</h4>
        <h4>{this.state.Prix}</h4>
      </div>
    )
  }
}

export default Attraction;
