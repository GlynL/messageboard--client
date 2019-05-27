import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

import Form from "./Form";

export const Signup = props => {
  const handleSubmit = user => {
    props.signup(user, () => props.history.push("/"));
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      {props.errorMessage && <div>{props.errorMessage}</div>}
      <Form handleSubmit={handleSubmit} buttonText="Sign Up" />
    </div>
  );
};

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage });

export default connect(
  mapStateToProps,
  actions
)(Signup);
