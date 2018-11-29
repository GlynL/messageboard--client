import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const defaultState = {
  email: "",
  password: ""
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state, () => this.props.history.push("/"));
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <div>{this.props.errorMessage}</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password" />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage });

export default connect(
  mapStateToProps,
  actions
)(Signup);
