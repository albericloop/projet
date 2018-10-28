import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import TableauAttraction from '../Attraction/TableauAttraction.js';
import TableauPersonnel from '../Personnel/TableauPersonnel.js';
import TableauBatiment from '../Batiment/TableauBatiment.js';
import TableauMaintenance from '../Maintenance/TableauMaintenance.js';
import Tableau from '../Tableau/Tableau.js';
import App from '../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

class Menu extends Component {

  render(){

    return(
      <Router>
          <Route render={({ location, history }) => (
              <React.Fragment>
                  <SideNav
                      onSelect={(selected) => {
                          const to = '/' + selected;
                          if (location.pathname !== to) {
                              history.push(to);
                          }
                      }}
                      defaultExpanded='true'
                  >
                      <SideNav.Toggle  />
                      <SideNav.Nav defaultSelected="home">
                          <NavItem eventKey="home">
                              <NavIcon>
                                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  Home
                              </NavText>
                          </NavItem>

                          <NavItem eventKey="attractions">
                              <NavIcon>
                                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  Attractions
                              </NavText>
                          </NavItem>

                          <NavItem eventKey="batiment">
                              <NavIcon>
                                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  Batiment
                              </NavText>
                          </NavItem>

                          <NavItem eventKey="personnel">
                              <NavIcon>
                                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  Personnel
                              </NavText>
                          </NavItem>

                          <NavItem eventKey="maintenance">
                              <NavIcon>
                                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                              </NavIcon>
                              <NavText>
                                  Maintenance
                              </NavText>
                          </NavItem>
                      </SideNav.Nav>
                  </SideNav>
                  <main>

                      <Route path="/home" component={Tableau} />
                      <Route exact path="/attractions" component={TableauAttraction} />
                      <Route exact path="/batiment" component={TableauBatiment} />
                      <Route path="/personnel" component={TableauPersonnel} />
                      <Route path="/maintenance" render={TableauMaintenance} />

                  </main>
              </React.Fragment>
          )}
          />
      </Router>
    )
  }
}

export default Menu;
