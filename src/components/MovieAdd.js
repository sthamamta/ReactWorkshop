import React,{Component} from 'react';
export default class MovieAdd extends Component {
	constructor(props){
		super(props)
		this.state={
			name:'',
			cast:'',
			description:''

		}
	}


	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}


	handleClick = (e) => {
    e.preventDefault()
    const data = this.state
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => {
      this.props.history.push('/');
    });
  }
	render(){
		return(
		 <div className='jumbotron container '>
        <h1 className="display-4">Add movie</h1>
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
          <button className="btn btn-success" onClick={this.handleClick}>Add</button>
        </form>
      </div>
      )

	}
 
}