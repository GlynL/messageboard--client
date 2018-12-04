import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/boards";
import requireAuth from "../hocs/requireAuth";

const INITIAL_STATE = { name: "" };

class NewBoard extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history, token } = this.props;
    this.props.addBoard(this.state, token, () => history.push("/"));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <section>
        <header>
          <h1>Add New Board</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Add Board</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({ token: state.auth.authenticated });

export default connect(
  mapStateToProps,
  actions
)(requireAuth(NewBoard));
