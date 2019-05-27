import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

import Form from "./Form";

export const Signin = props => {
  function handleSubmit(user) {
    props.signin(user, () => props.history.push("/"));
  }

  return (
    <div className="container">
      <h1>Sign In</h1>
      {props.errorMessage && <div>{props.errorMessage}</div>}
      <Form handleSubmit={handleSubmit} buttonText="Sign In" />
    </div>
  );
};

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage });

export default connect(
  mapStateToProps,
  actions
)(Signin);
