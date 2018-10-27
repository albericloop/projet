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
import TableauTest from '../Tableau/TableauTest.js';
import Test from '../Attraction/Test.js';
import TableauAttraction from '../Attraction/TableauAttraction.js';
import App from '../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

class Menu extends Component {

  render(){
    const TabAttr = () => {
      return (<TableauAttraction item="attraction"/>);
    }

    const TabBat = () => {
      return (<Tableau item="batiment"/>);
    }

    const TabPers = () => {
      return (<Tableau item="personnel"/>);
    }

    const TabMain = () => {
      return (<Tableau item="maintenance"/>);
    }

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

                      <Route exact path="/home" render={App} />
                      <Route exact path="/attractions" render={TabAttr} />
                      <Route exact path="/batiment" render={TabBat} />
                      <Route path="/personnel" render={TabPers} />
                      <Route path="/maintenance" render={TabMain} />

                  </main>
              </React.Fragment>
          )}
          />
      </Router>
    )
  }
}

export default Menu;
