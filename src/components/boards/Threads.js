import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";

class Threads extends Component {
  renderList() {
    const { board, match } = this.props;
    return board.threads.map(thread => (
      <li key={thread._id}>
        <Link to={`/${match.params.board}/${thread._id}`}>
          <h2>{thread.title}</h2>
          <p>{thread.text}</p>
        </Link>
      </li>
    ));
  }

  render() {
    if (
      Object.keys(this.props.board).length === 0 &&
      this.props.board.constructor === Object
    ) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <h1>Threads</h1>
        <div>
          <Link to={`/${this.props.board.name}/new-thread`}>
            Start new thread.
          </Link>
        </div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ board: state.boards.activeBoard });

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Threads);
