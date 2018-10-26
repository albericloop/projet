import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Personnel extends Component {
  constructor(ID, Nom, Prenom, Age, Fonction, Salaire) {
    this.ID = ID;
    this.Nom = Nom;
    this.Prenom = Prenom;
    this.Age = Age;
    this.Fonction = Fonction;
    this.Salaire = Salaire;
  }
}

export default Personnel;
