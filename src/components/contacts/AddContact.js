import React, { Component } from 'react';
import{ Consumer} from '../../context';
import {TextInputGroup, SelectGroup} from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    stack: '',
    sex: '',
    errors: {},
  };

  onChange =(e) => this.setState({[e.target.name]: e.target.value});
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

    const newContact = {
      // id: uuid(),
      name,
      email,
      stack,
      sex
    };
    
    const response = await axios
    .post('https://jsonplaceholder.typicode.com/users', 
    newContact)
    dispatch({type: 'ADD_CONTACT', 
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
             <div className="card-header">Add contact</div>
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
                 {/* <div className="form-group">
                   <label htmlFor="stack">Stack</label>
                   <select 
                   name="stack"
                   id="stack" 
                   className="form-control
                    form-control-lg"
                    value = {stack} 
                    onChange = {this.onChange}>
                     <option value = "Frontend">Frontend</option>
                     <option value = "backend">backend</option>
                   </select>
                 </div> */}
                 
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
                 value="Add Fellow" />
      
               </form>
             </div>
            </div>
          )
        }}
      </Consumer>
    )

    
  }
}

export default AddContact;