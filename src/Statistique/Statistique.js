import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class Statistique extends Component {
  constructor(ID, Date, NombreVisiteurs, Attraction, Recette) {
    this.ID = ID;
    this.Date = Date;
    this.NombreVisiteurs = NombreVisiteurs;
    this.Recette = Recette;
  }
}
