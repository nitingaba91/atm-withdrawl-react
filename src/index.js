import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homeComponent/home';
import NotFound from './components/notFoundComponent/notFound';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const Routing = (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
)
ReactDOM.render(Routing, document.getElementById('root'));
