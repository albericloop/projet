import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Batiment from '../Batiment/Batiment.js';
import myDataBatiment from '../dataBatiment.json';
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

class TableauBatiment extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataBatiment: myDataBatiment,
      batimentList: []
    }
    this.item = null;
    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };

 }


 componentDidMount() {
   var batiment = this.state.dataBatiment;
   var listtest = new Array();
   for(var i = 0; i < batiment.length; i++) {
       var obj = batiment[i];
       listtest.push({id: obj.ID, Nom: obj.Nom, Date: obj.Date});
   }

   this.setState({
     batimentList: listtest
   })
  }

  remove(index){
    console.log(index);
    this.setState({
      batimentList: this.state.batimentList.filter((_, i) => i !== index)
    });
    /*var temp = this.state.batimentList;
    temp.splice(index,1);
    this.setState({
      batimentList: temp
    })*/
  }

  removeEvent = (index) => {
    return () => {
      this.remove(index);
    }
  }


  displayBatiment(batimentList){
    const options = {
      afterInsertRow: onInsertRow,
      afterDeleteRow: onDeleteRow,
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
              <BootstrapTable ref='table' data={ batimentList }
                                          insertRow={true}
                                          deleteRow={true}
                                          options={options}
                                          cellEdit={cellEditProp}
                                          selectRow={selectRowProp}>
                <TableHeaderColumn dataField='id' isKey={ true } dataSort>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='Nom' dataSort>Batiment</TableHeaderColumn>
                <TableHeaderColumn dataField='Date' dataSort>Date d'installation</TableHeaderColumn>
              </BootstrapTable>
            </div>);
  }


  render(){
    const { batimentList } = this.state;

      return (<div>{this.displayBatiment(batimentList)}</div>)
    
  }
}
export default TableauBatiment;
