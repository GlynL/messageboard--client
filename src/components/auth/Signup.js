import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

import Form from "./Form";

export class Signup extends Component {
  handleSubmit = user => {
    this.props.signup(user, () => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        {this.props.errorMessage && <div>{this.props.errorMessage}</div>}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage });

export default connect(
  mapStateToProps,
  actions
)(Signup);
