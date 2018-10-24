import React from 'react';
import ReactDOM from 'react-dom';
import ViewAttraction from './ViewAttraction/ViewAttraction.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { Button } from 'reactstrap';
import * as serviceWorker from './serviceWorker';

const routing = ( <Router>
     <Button color="danger" size="lg"><Link to="/attractions">Attractions</Link></Button>
     <Button color="primary" size="lg">Batiments</Button>
     <Button color="success" size="lg">Personnel</Button>
     <Route path="/" component={App} />
     <Route path="/attractions" component={ViewAttraction} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
