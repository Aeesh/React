import React, { Component } from 'react';
import Contacts from './components/Contacts.js';
import Header from './components/Header';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div >
        <Header fellows = "TEAM 5"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}


export default App;
