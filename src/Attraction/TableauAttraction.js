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


  function onInsertRow(row) {
    let newRowStr = ''
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n'
    }
  }

  function onDeleteRow(rowKeys) {
  }

class TableauAttraction extends Component {
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
    this.isExpandableRow = this.isExpandableRow.bind(this);
    this.expandComponent = this.expandComponent.bind(this);
    this.expandColumnComponent = this.expandColumnComponent.bind(this);
 }

 isExpandableRow(row) {
   return true;
 }

 expandComponent(row) {
   var temp = this.state.attractionList.id === row['id'];
   const resultat = this.state.attractionList.find( item => item.id === row['id']);
   console.log("id" + row['id'] + "data" + resultat['Description']);
   return (
     <p>{resultat['Description']}</p>
   );
 }

 componentDidMount() {
   var attraction = this.state.dataAttraction;
   var listtest = new Array();
   for(var i = 0; i < attraction.length; i++) {
       var obj = attraction[i];
       listtest.push({id: obj.ID, Nom: obj.Nom, Date: obj.Date, Prix: obj.Prix, Description: obj.Description});
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

  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '-' : '+' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );
  }

  displayAttraction(attractionList){
    const options = {
      afterInsertRow: onInsertRow,
      afterDeleteRow: onDeleteRow,
      expandRowBgColor: 'rgb(242, 255, 163)',
      mode: "click"
    };

    // To delete rows you be able to select rows
    const selectRowProp = {
      mode: 'checkbox'
    }

    const cellEditProp = {
     mode: 'click', // 'dbclick' for trigger by double-click
     nonEditableRows: function() {
       return [3];
     }
   }

    return (<div className='middle'>
              <BootstrapTable ref='table' data={ attractionList }
                                          expandableRow={this.isExpandableRow}
                                          insertRow={true}
                                          deleteRow={true}
                                          options={options}
                                          cellEdit={cellEditProp}
                                          expandComponent={this.expandComponent}
                                          expandColumnOptions={{
                                            expandColumnVisible: true,
                                            expandColumnComponent: this.expandColumnComponent,
                                            columnWidth: 50
                                          }
                                          }
                                          selectRow={selectRowProp}>
                <TableHeaderColumn dataField='id' isKey={ true } dataSort>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='Nom' dataSort>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='Date' dataSort>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='Prix' dataSort>Price</TableHeaderColumn>
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
export default TableauAttraction;
