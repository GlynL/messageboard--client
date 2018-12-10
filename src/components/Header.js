import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/header.css";

const Header = props => {
  function renderLinks() {
    if (props.authenticated) {
      return (
        <div className="header__nav-group">
          <Link className="header__nav-item" to="/new-board">
            New Board
          </Link>
          <Link className="header__nav-item" to="/signout">
            Sign out
          </Link>
        </div>
      );
    }
    return (
      <div className="header__nav-group">
        <Link className="header__nav-item" to="/signup">
          Sign Up
        </Link>
        <Link className="header__nav-item" to="/signin">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <nav className="header__nav">
      <Link className="header__nav-item" to="/">
        MessageBoard
      </Link>
      {renderLinks()}
    </nav>
  );
};

const mapStateToProps = state => ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(Header);
