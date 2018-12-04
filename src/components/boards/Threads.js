import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Threads extends Component {
  componentDidMount() {
    // /:board/threads - all threads api
  }

  renderList() {
    const { board } = this.props;
    return board.threads.map(thread => (
      <li>
        <h2>{thread.name}</h2>
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

export default connect(mapStateToProps)(Threads);
