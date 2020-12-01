import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../../context';


class Contact extends Component {

  state = {
    showTeamInfo: false
  };
  onDeleteClick = (id,dispatch) => {
   dispatch({type:'DELETE_CONTACT', payload: id});
  }
  onShowClick = () =>{
    this.setState({showTeamInfo:
       !this.state.showTeamInfo});
  };
  
  render() {
    const {id,name, stack, sex } = this.props.contact;
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
              style={{cursor:'pointer', float:'right', color:'red'}} />
              </h4>
              
              {showTeamInfo ? ( <ul className="list-group">
                {/* <li>Name: {this.props.name}</li> */}
                {/* <li>Email: {this.props.email}</li> */}
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