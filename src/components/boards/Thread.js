import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setActive } from "../../actions/boards";
import { setActiveThread } from "../../actions/threads";
import isObjectEmpty from "../../helpers/isObjectEmpty";
import Replies from "./Replies";
import "../../styles/thread.css";

class Thread extends Component {
  componentDidMount() {
    this.props.setActive(this.props.match.params.board);
  }

  componentDidUpdate(prevProps, prevState) {
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
      <section className="thread">
        <div className="thread__info">
          <Link to={`/${this.props.board.name}`}>
            Back to {this.props.board.name}
          </Link>
          <h1>{this.props.thread.title}</h1>
          <p>{this.props.thread.text}</p>
        </div>

        <Replies />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boards.activeBoard,
  thread: state.threads.activeThread
});

export default connect(
  mapStateToProps,
  { setActive, setActiveThread }
)(Thread);
