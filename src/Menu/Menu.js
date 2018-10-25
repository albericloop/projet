import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Attraction from '../Attraction/Attraction.js';
import Batiment from '../Batiment/Batiment.js';
import Personnel from '../Personnel/Personnel.js';
import Maintenance from '../Maintenance/Maintenance.js';
import Tableau from '../Tableau/Tableau.js';
import App from '../App.js';

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
                  >
                      <SideNav.Toggle />
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

                      <Route path="/attractions" component={Tableau}/>
                      <Route path="/batiment" component={Batiment} />
                      <Route path="/personnel" component={Personnel} />
                      <Route path="/maintenance" component={Maintenance} />

                  </main>
              </React.Fragment>
          )}
          />
      </Router>
    )
  }
}

export default Menu;
