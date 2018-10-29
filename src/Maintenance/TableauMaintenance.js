import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import myDataMaintenance from '../dataMaintenance.json';
import '../Tableau.css';
import Popup from "reactjs-popup";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TableauMaintenance extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataMaintenance: myDataMaintenance,
      maintenanceList: []
    }
    this.item = null;
    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };

 }

 componentDidMount() {
   var maintenance = this.state.dataMaintenance;
   var listtest = new Array();
   for(var i = 0; i < maintenance.length; i++) {
       var obj = maintenance[i];
       listtest.push({id: obj.ID, Attraction:obj.Attraction, DateLast: obj.DateLast, DateNext: obj.DateNext, Technicien:obj.Technicien});
   }

   this.setState({
     maintenanceList: listtest
   })
  }


  displayMaintenance(maintenanceList){
    const options = {
      mode: "click"
    };


    const cellEditProp = {
     mode: 'click', // 'dbclick' for trigger by double-click
     nonEditableRows: function() {
       return [3];
     }
   }

    return (<div >
              <BootstrapTable ref='table' data={ maintenanceList }
                                          options={options}
                                          cellEdit={cellEditProp}>
                <TableHeaderColumn dataField='Attraction' isKey={ true } dataSort>Attraction</TableHeaderColumn>
                <TableHeaderColumn dataField='DateLast' dataSort>Dernière maintenance</TableHeaderColumn>
                <TableHeaderColumn dataField='DateNext' dataSort>Prochaine maintenance</TableHeaderColumn>
                <TableHeaderColumn dataField='Technicien' dataSort>Technicien</TableHeaderColumn>
              </BootstrapTable>
            </div>);
  }


  render(){
    const { maintenanceList } = this.state;

    return (
      <div className="middle">{this.displayMaintenance(maintenanceList)}
      <h5>La prochaine maintenance est prévue sur la Roue d'Ixion et aura lieu dans <Countdown date="Tue, 6 Nov 2018 08:00:00" /></h5>
      </div>

      //<Countdown date='Sat, 10 Nov 2018 11:00:00' />
    )
  }
}

export default TableauMaintenance;
