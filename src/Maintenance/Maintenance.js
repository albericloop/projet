import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Maintenance extends Component {
  constructor(ID, DateLast, DateNext, Attraction, Technicien) {
    this.ID = ID;
    this.DateLast = DateLast;
    this.DateNext = DateNext;
    this.Attraction = Attraction;
    this.Technicien = Technicien;
  }
}

export default Maintenance;
