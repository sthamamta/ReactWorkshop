import React, {Component} from 'react'
import {snakeCase} from 'lodash'

import {Link} from 'react-router-dom'

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cast: ''
    }
    this.serverURL = 'http://localhost:4000/movies/'
    this.id = this.props.match.params.id
    console.log('hhhhhhhhhh', this.id)
  }

  componentDidMount() {
    fetch(this.serverURL + this.id)
    .then(res => res.json())
    .then(data => {
      console.log('data,,,,,', data);
      this.setState(data);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const data = this.state
    fetch(this.serverURL + this.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => {
      this.props.history.push('/');
    });
  }
  render() {
    return (
      <div className='jumbotron container '>
        <h1 className="display-4">Movie Details</h1>
        <p>
        Movie Name : {this.state.name}</p> 
       <img src={`/images/${snakeCase(this.state.name)}.jpg`} className="card-img-top" alt="..." />

        <p>
        Movie Caste :{this.state.caste}</p> 
        
        <p>
        Movie Description : {this.state.description}</p> 
        
        <p>
        Movie Genre : {this.state.genre}</p> 
        
        <Link className="btn btn-primary button" to='/'>Back</Link>
      </div>
    )
  }
}