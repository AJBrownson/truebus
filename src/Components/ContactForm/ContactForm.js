import React, { Component } from 'react'
import { Form, Button } from './ContactForm.styles';


export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You got a hit: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          
          <input type='email' placeholder='Enter your email' value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button type='submit'>Enter</Button>

      </Form>
    )
  }
}