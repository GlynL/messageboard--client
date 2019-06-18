import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import requireAuth from "../hocs/requireAuth";
import * as actions from "../../actions/threads";

const INITIAL_STATE = {
  title: "",
  text: ""
};

export class NewThread extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSubmit = e => {
    e.preventDefault();
    const board = this.props.match.params.board;
    // api uses board name not id
    this.props.addThread(this.state, board, this.props.token, () =>
      this.props.history.push(`/${board}`)
    );
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="container">
        <header>
          <Link className="btn btn--danger" to={`/${this.props.board.name}`}>
            Back To {this.props.board.name}
          </Link>
          <h1>Create New Thread</h1>
        </header>
        <p>{this.props.error}</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form__label" htmlFor="title">
            Title
          </label>
          <input
            className="form__input"
            onChange={this.handleChange}
            value={this.state.title}
            type="text"
            name="title"
            id="title"
            placeholder="Glyn"
          />
          <label className="form__label" htmlFor="text">
            Text
          </label>
          <textarea
            className="form__input"
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
            id="text"
            placeholder="How is it possible Glyn is so awesome?"
          />
          <button className="btn">Create</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.authenticated,
  error: state.threads.errorMessage,
  board: state.boards.activeBoard
});

export default connect(
  mapStateToProps,
  actions
)(requireAuth(NewThread));
