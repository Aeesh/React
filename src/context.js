import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.id !== action.payload)
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id 
          ?(contact = action.payload) 
          : contact)
      };
      default:
        return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'Aisha Opaluwa',
      //   email: 'adamaisha352@gmail.com',
      //   stack: 'Frontend',
      //   sex: 'Female',
      // },
      // {
      //   id: 2,
      //   name: 'Toluwanimi Ayoola',
      //   email: 'tolu@gmail.com',
      //   stack: 'Backend',
      //   sex: 'Female',
      // },
      // {
      //   id: 3,
      //   name: 'Ayodele Samuel',
      //   email: 'ayosam@gmail.com',
      //   stack: 'Frontend',
      //   sex: 'Male',
      // },
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const response = await axios.get
    ('https://jsonplaceholder.typicode.com/users')
    this.setState({contacts:
        response.data})
    
    // .then(response => this.setState({contacts:
    //   response.data}))
    
      //   fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   name: data.name,
    //   email: data.email
    // }))
  }

  render() {
    return(
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;