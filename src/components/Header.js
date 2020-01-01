// importing react
import React, { Component } from "react";

// importing logo
import logo from "../svg/logo.svg"

// importing react router
import { NavLink } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top">
          <img src={logo} />
        </div>
      </div>
      );
  }
}

export default Header;
