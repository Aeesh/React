import React, { Component } from 'react'

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
      default:
        return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Aisha Opaluwa',
        stack: 'Frontend',
        sex: 'Female',
      },
      {
        id: 2,
        name: 'Toluwanimi Ayoola',
        stack: 'Backend',
        sex: 'Female',
      },
      {
        id: 3,
        name: 'Ayodele Samuel',
        stack: 'Frontend',
        sex: 'Male',
      },
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return(
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;