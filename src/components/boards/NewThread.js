import React, { Component } from "react";
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
      <div>
        <p>{this.props.error}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            onChange={this.handleChange}
            value={this.state.title}
            type="text"
            name="title"
            id="title"
          />
          <label htmlFor="text">Text</label>
          <textarea
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
            id="text"
          />
          <button>Create Thread</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.authenticated,
  error: state.threads.errorMessage
});

export default connect(
  mapStateToProps,
  actions
)(requireAuth(NewThread));
