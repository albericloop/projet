import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Personnel from '../Personnel/Personnel.js';
import myDataPersonnel from '../dataPersonnel.json';
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

class TableauPersonnel extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataPersonnel: myDataPersonnel,
      personnelList: []
    }
    this.item = null;
    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };

 }


 componentDidMount() {
   var personnel = this.state.dataPersonnel;
   var listtest = new Array();
   for(var i = 0; i < personnel.length; i++) {
       var obj = personnel[i];
       listtest.push({id: obj.ID, Nom: obj.Nom, Prenom:obj.Prenom, Age: obj.Age, Fonction:obj.Fonction, Salaire: obj.Salaire});
   }

   this.setState({
     personnelList: listtest
   })
  }

  remove(index){
    console.log(index);
    this.setState({
      personnelList: this.state.personnelList.filter((_, i) => i !== index)
    });
    /*var temp = this.state.personnelList;
    temp.splice(index,1);
    this.setState({
      personnelList: temp
    })*/
  }

  removeEvent = (index) => {
    return () => {
      this.remove(index);
    }
  }


  displayPersonnel(personnelList){
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
              <BootstrapTable ref='table' data={ personnelList }
                                          insertRow={true}
                                          deleteRow={true}
                                          options={options}
                                          cellEdit={cellEditProp}
                                          selectRow={selectRowProp}>
                <TableHeaderColumn dataField='id' isKey={ true } dataSort>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='Nom' dataSort>Nom</TableHeaderColumn>
                <TableHeaderColumn dataField='Prenom' dataSort>Prénom</TableHeaderColumn>
                <TableHeaderColumn dataField='Age' dataSort>Age</TableHeaderColumn>
                <TableHeaderColumn dataField='Fonction' dataSort>Fonction</TableHeaderColumn>
                <TableHeaderColumn dataField='Salaire' dataSort>Salaire Mensuel</TableHeaderColumn>
              </BootstrapTable>
            </div>);
  }


  render(){
    const { personnelList } = this.state;

      return (<div>{this.displayPersonnel(personnelList)}</div>)

  }
}
export default TableauPersonnel;
