import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setActive } from "../../actions/boards";
import { setActiveThread } from "../../actions/threads";
import isObjectEmpty from "../../helpers/isObjectEmpty";
import Replies from "./Replies";
import Loader from "../common/Loader";
import "../../styles/thread.css";

export class Thread extends Component {
  componentDidMount() {
    this.props.setActive(this.props.match.params.board);
  }

  componentDidUpdate() {
    if (!isObjectEmpty(this.props.board) && isObjectEmpty(this.props.thread)) {
      this.props.setActiveThread(
        this.props.match.params.thread,
        this.props.board
      );
    }
  }

  handleClick = () => this.props.history.push(`/${this.props.board.name}`);

  render() {
    if (isObjectEmpty(this.props.thread)) {
      return <Loader />;
    }
    return (
      <section className="thread">
        <div className="thread__info">
          <Link className="btn btn--danger" to={`/${this.props.board.name}`}>
            Back to {this.props.board.name}
          </Link>
          <h1>{this.props.thread.title}</h1>
          <p>{this.props.thread.text}</p>
        </div>

        <Replies replies={this.props.thread.replies} />
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
