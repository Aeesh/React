import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../context';


class Contact extends Component {

  state = {
    showTeamInfo: false
  };
  onDeleteClick = async (id,dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

      dispatch({type:'DELETE_CONTACT', payload: id})
      
  };
  onShowClick = () =>{
    this.setState({showTeamInfo:
       !this.state.showTeamInfo});
  };
  
  render() {
    const {id,name, email, stack, sex } = this.props.contact;
    const {showTeamInfo} = this.state;
    
    return (

      <Consumer>
        {value => {
          const {dispatch} = value;
          return(
            <div className="card card-body mb-3">
              <h4>{name} 
                <i onClick={this.onShowClick}
              className="fa fa-sort-down ml-2"
              style={{cursor:'pointer',}} />
                
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)}
              className="fa fa-times"
              style={{cursor:'pointer', float:'right', color:'red'}} 
              />
              
              <Link to={`contact/edit/${id}`} >
              <i className="fa fa-pencil"
              style={{
                cursor:'pointer', 
                float:'right', 
                color:'black',
                marginRight: '1rem'
              }} 
              />
              </Link>
              
              </h4>
              
              {showTeamInfo ? ( <ul className="list-group">
                {/* <li>Name: {this.props.name}</li> */}
                {/* <li>Email: {this.props.email}</li> */}
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Stack: {stack}</li>
                <li className="list-group-item">Sex: {sex}</li>
              </ul>) : null }
            </div>
          )
        }}
      </Consumer>
      
    );
  }
}

Contact.propTypes = {
 contact: PropTypes.object.isRequired,
};

export default  Contact;