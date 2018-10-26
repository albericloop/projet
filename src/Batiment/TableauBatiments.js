import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Batiment from './Batiment.js';
import myDataBatiment from '../dataAttraction.json';
import Menu from '../Menu/Menu.js';
import '../Tableau.css';
import Popup from "reactjs-popup";

class Tableau extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataBatiment: myDataBatiment, batimentList: [],
    }
    this.item = null;

 }

 componentDidMount() {
   var batiment = this.state.dataBatiment;
   var list = [];
   console.log("list1: " + batiment.length);
   for(var i = 0; i < batiment.length; i++) {
       var obj = batiment[i];
       list = list.concat({ID: obj.ID, Nom: obj.Nom, Date: obj.Date});
   }
   this.setState({
     batimentList: list
   })
  }



  remove(){
    this.setState({
      batimentList: this.state.batimentList.slice(0, -1)
    })
  }

  add(){


  }

  displayBatiment(batimentList){

    let listItem = batimentList.map((batiment, index) =>{

      return <li key={index}>
        <Batiment ID={batiment.ID} Nom={batiment.Nom} Date={batiment.Date} Prix={batiment.Prix}/>
        <button onClick={() => {this.remove(index)}}>Remove</button>
        <button onClick={() => {this.remove(index)}}>Modify</button>
      </li>

    });
    return (<div className='right'><button class="add"> Ajouter une nouvelle {this.props.item}</button>
            <ul>{listItem}</ul></div>);
  }

  displayBatiments(){
    return (<div className='right'><button class="add"> Ajouter un nouveau batiment</button></div>);
  }

  render(){
      return (
        <div>
          <Menu />
          {this.displayBatiments()}
        </div>
      )
  }
}

export default TableauBatiment;
