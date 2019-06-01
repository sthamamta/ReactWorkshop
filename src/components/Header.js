import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark">
        <a className="navbar-brand" href='/'>MovieDB</a>
        <Link className="btn btn-outline-success my-2 my-sm-0" to='/add-movie'>Add movie</Link>
    </nav>
  )
}

export default Header