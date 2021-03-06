// importing react
import React, { Component } from "react";

// importing logo
import logo from "../svg/logo.svg";

// importing react router
import { NavLink } from "react-router-dom";

// importing styled components
import styled from "styled-components";

// Header Container
const HeaderContainer = styled.div
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0635rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1 rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
  };

class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div className="header-top">
          <img src={logo} />
          <NavLink to="/" className="signIn-btn">Sign In</NavLink>
        </div>
      </HeaderContainer>
      );
  };
};

export default Header;

