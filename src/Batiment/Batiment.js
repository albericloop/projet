import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Batiment extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: this.props.ID, Nom: this.props.Nom, Date: this.props.Date}
  }
  render(){
    return(
      <div className="Batiment">
        <h3>{this.props.ID}</h3>
        <h3>{this.props.Nom}</h3>
        <h3>{this.props.Date}</h3>
      </div>
    )
  }
}

export default Batiment;
