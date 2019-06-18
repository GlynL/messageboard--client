import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import * as threadActions from "../../actions/threads";
import * as boardActions from "../../actions/boards";

const INITIAL_STATE = {
  text: ""
};

export class NewReply extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { board, thread } = this.props.match.params;
    this.props.addReply(
      this.state,
      board,
      thread,
      this.props.token,
      this.props.updateBoard
    );
    this.setState(INITIAL_STATE);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    if (!this.props.token) return <div>Login to leave a comment.</div>;
    return (
      <div>
        <h2>Add Comment</h2>
        <p>{this.props.error}</p>
        <form className="new-reply-form" onSubmit={this.handleSubmit}>
          <textarea
            className="new-reply-form__text"
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
            id="text"
            placeholder="This is so cool!"
          />
          <button className="btn">Comment</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.authenticated,
  error: state.threads.errorMessage
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { ...threadActions, ...boardActions }
  )
)(NewReply);
