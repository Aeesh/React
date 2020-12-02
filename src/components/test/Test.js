import React, { Component } from 'react';

 class Test extends Component {
  
  state= {
    title: '',
    body: '',
    userId: ''
  }
  
   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => this.setState({
      title: data.title,
      body: data.body,
      userId: data.userId
    }))
    // console.log('component did mount...');
   }
   
  //  componentWillMount() {
  //   console.log('component will mount...');
  //  }
   
  
   render() {
     const {title, userId} = this.state;
    return (
      <div>
        <h1>{title} </h1>
        <p>{userId} </p>
      </div>
    )
  }
}

export default Test;