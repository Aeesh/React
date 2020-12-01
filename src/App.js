import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts.js';
import AddContact from './components/contacts/AddContact';

import Header from './components/layout/Header';
import About from './components/pages/About';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div >
            <Header fellows = "TEAM 5"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
