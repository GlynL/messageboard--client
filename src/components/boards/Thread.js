import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as boardActions from "../../actions/boards";
import * as threadActions from "../../actions/threads";
import isObjectEmpty from "../../helpers/isObjectEmpty";
import Replies from "./Replies";

class Thread extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: this flow not working - setup single lookup api?
    this.props.setActive(this.props.boards, this.props.match.params.board);
    if (!isObjectEmpty(this.props.board)) {
      this.props.setActiveThread(
        this.props.match.params.thread,
        this.props.board
      );
    }
  }

  render() {
    if (isObjectEmpty(this.props.thread)) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <Link to={`/${this.props.board.name}`}>
          Back to {this.props.board.name}
        </Link>
        <h1>{this.props.thread.title}</h1>
        <p>{this.props.thread.text}</p>
        <Replies />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boards.activeBoard,
  boards: state.boards.boards,
  thread: state.threads.activeThread
});

export default connect(
  mapStateToProps,
  { ...boardActions, ...threadActions }
)(Thread);
