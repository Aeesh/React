import React, { Component } from 'react';
import{ Consumer} from '../../context';
import {TextInputGroup, SelectGroup} from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    stack: '',
    sex: '',
    errors: {},
  };

  onChange =(e) => this.setState({[e.target.name]: e.target.value});
  
  async componentDidMount() {
    const {id} = this.props.match.params;
    const response = await axios.get
    (`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = response.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      stack: contact.stack,
    })
  }

  onSubmit = async (dispatch,e) => {
    e.preventDefault();
    const {name, email, stack, sex} = this.state;

    if(name === '') {
      this.setState({errors: { name: 'Name is required'}});
      return;
    }
    if(email === '') {
      this.setState({errors: { email: 'Email is required'}});
      return;
    }
    if(stack === '') {
      this.setState({errors: { stack: 'Stack is required'}});
      return;
    }
    if(sex === '') {
      this.setState({errors: { sex: 'Sex is required'}});
      return;
    }

    const updContact = {
      name, 
      email, 
      stack, 
      sex
    }

    const {id} = this.props.match.params;

    const response = await axios.put
    (`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
    
    dispatch({type: 'UPDATE_CONTACT', 
    payload: response.data})

    //clear form data
    this.setState ({
      name: '',
      email: '',
      stack: '',
      sex: '',
      errors: {},
    });

    this.props.history.push('/');

  };

  render() {
    const {name, email, stack, sex, errors} = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className ="card mb-3">
             <div className="card-header">Edit Fellow</div>
             <div className="card-body">
               <form onSubmit ={this.onSubmit.bind(this, dispatch)}>
                 <TextInputGroup 
                  label = 'Name'
                  name = 'name'
                  placeholder = 'input name'
                  value = {name}
                  onChange = {this.onChange}
                  error={errors.name}
                 />
                 
                 <TextInputGroup 
                  label = 'Email'
                  name = 'email'
                  type = 'email'
                  placeholder = 'input email'
                  value = {email}
                  onChange = {this.onChange}
                  error={errors.email}
                 />

                  < SelectGroup 
                  label = 'Stack'
                  name = 'stack'
                  value = {stack}
                  onChange = {this.onChange}
                  error={errors.stack}
                  />
              
                 <div className="form-group">
                   <label htmlFor="sex">Sex</label>
                   <select name="sex"
                    id="sex" 
                    className="form-control
                    form-control-lg"
                    value = {sex} 
                    onChange = {this.onChange}>
                     <option value = "Female">Female</option>
                     <option value = "Male">Male</option>
                   </select>
                 </div>
                 <input type="submit" 
                 className="btn btn-dark btn-block" 
                 value="Update Fellow" />
      
               </form>
             </div>
            </div>
          )
        }}
      </Consumer>
    )

    
  }
}

export default EditContact;