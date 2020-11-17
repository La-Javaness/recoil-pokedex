import React from "react"
import { Link } from "react-router-dom"

import "./Nav.css"

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pokedex">
          <li>Pokedex</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
