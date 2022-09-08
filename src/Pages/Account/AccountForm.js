import React, { Component } from 'react'
import { Input, Button } from './Account.styles'

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <Input type='text' placeholder='Enter your name' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Sex
          <Input type='text' placeholder='Enter your preferred pronoun' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Phone Number
          <Input type='number' placeholder='Enter your phone number' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Email Address
          <Input type='email' placeholder='Enter your email' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            City
          <Input type='text' placeholder='Enter your city' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Region
          <Input type='text' placeholder='Enter your region' value={this.state.value} onChange={this.handleChange} />
          </label>
        
        <Button type='submit'>Save changes</Button>

      </form>
    )
  }
}