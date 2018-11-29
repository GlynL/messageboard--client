import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  function renderLinks() {
    if (props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign out</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }

  return (
    <nav>
      <Link to="/">MessageBoard</Link>
      {renderLinks()}
    </nav>
  );
};

const mapStateToProps = state => ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(Header);
