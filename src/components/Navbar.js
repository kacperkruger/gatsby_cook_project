import React from "react"
import logo from "../assets/images/logo.svg"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={logo} alt={"SimpleRecipes"} />
          </Link>
          <div className="nav-links show-links"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
