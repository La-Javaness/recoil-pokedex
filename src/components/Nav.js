import React from "react"
import { Link } from "react-router-dom"

import "./Nav.css"

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokedex">Pokedex</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
