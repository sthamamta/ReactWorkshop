import React, {Component} from 'react'


export default class MovieEdit extends Component {
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
        <h1 className="display-4">Edit movie</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Cast</label>
            <input type="text" className="form-control" name="cast" onChange={this.handleChange} value={this.state.cast} />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input type="text" className="form-control" name="genre" onChange={this.handleChange} value={this.state.genre} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" name="description" rows="3" onChange={this.handleChange} value={this.state.description}></textarea>
          </div>
          <button className="btn btn-info" onClick={this.handleClick}>Edit</button>
        </form>
      </div>
    )
  }
}