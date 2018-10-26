import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Attraction from '../Attraction/Attraction.js';
import myDataAttraction from '../dataAttraction.json';
import Menu from '../Menu/Menu.js';
import '../Tableau.css';
import Popup from "reactjs-popup";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var ReactBsTable = require('react-bootstrap-table');

class TableauTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataAttraction: myDataAttraction,
      attractionList: []
    }
    this.item = null;
    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
 }

 componentDidMount() {
   var attraction = this.state.dataAttraction;
   var listtest = new Array();

   for(var i = 0; i < attraction.length; i++) {
       var obj = attraction[i];
       listtest.push({ID: obj.ID, Nom: obj.Nom, Date: obj.Date, Prix: obj.Prix});
   }

   this.setState({
     attractionList: listtest
   })
  }

  remove(index){
    console.log(index);
    this.setState({
      attractionList: this.state.attractionList.filter((_, i) => i !== index)
    });
    /*var temp = this.state.attractionList;
    temp.splice(index,1);
    this.setState({
      attractionList: temp
    })*/
  }

  removeEvent = (index) => {
    return () => {
      this.remove(index);
    }
  }

  add(){


  }

  displayAttraction(attractionList){
/*
    let listItem = attractionList.map((attraction, index) =>{
      return <li key={index}>
        <Attraction ID={attraction.ID} Nom={attraction.Nom} Date={attraction.Date} Prix={attraction.Prix}/>
        <button onClick={this.removeEvent(index)}>Remove</button>
        <button onClick={() => {this.remove(index)}}>Modify</button>
      </li>

    });*/
    return (<div className='middle'><Button color="danger" size="lg" > Ajouter une nouvelle {this.props.item}</Button>
              <BootstrapTable ref='table' data={ attractionList }>
                <TableHeaderColumn dataField='ID' isKey dataSort>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='Nom' dataSort>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='Date'>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='Prix'>Price</TableHeaderColumn>
              </BootstrapTable>
            </div>);
  }

  displayBatiments(){
    return (<div className='right'><button class="add"> Ajouter un nouveau {this.props.item}</button></div>);
  }

  render(){
    const { attractionList } = this.state;

    if (this.props.item == "batiment"){
      return(<div>{this.displayBatiments()}</div>)
    }
    if(this.props.item == "attraction"){
      return (<div>{this.displayAttraction(attractionList)}</div>)
    }

  }
}
export default TableauTest;
