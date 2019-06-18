import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/boards";
import requireAuth from "../hocs/requireAuth";

const INITIAL_STATE = { name: "" };

export class NewBoard extends Component {
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
      <section className="container">
        <header>
          <Link className=" btn btn--danger" to="/">
            Back To Boards
          </Link>
          <h1>Create New Board</h1>
        </header>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="sweet new board"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button className="btn">Create</button>
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
