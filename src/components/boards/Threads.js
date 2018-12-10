import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import "../../styles/threads.css";

class Threads extends Component {
  renderList() {
    const { board, match } = this.props;
    return board.threads.map(thread => (
      <li className="threads__list-item" key={thread._id}>
        <Link
          className="threads__list-item-link"
          to={`/${match.params.board}/${thread._id}`}
        >
          <h2 className="threads__list-item-link-heading">{thread.title}</h2>
          <p className="threads__list-item-link-subheading">{thread.text}</p>
        </Link>
      </li>
    ));
  }

  renderNewThreadLink() {
    if (this.props.authed) {
      return (
        <div>
          <Link to={`/${this.props.board.name}/new-thread`}>
            Start new thread.
          </Link>
        </div>
      );
    }
    return <p>Sign up to start your own thread.</p>;
  }

  render() {
    if (
      Object.keys(this.props.board).length === 0 &&
      this.props.board.constructor === Object
    ) {
      return <div>loading...</div>;
    }

    return (
      <div className="threads">
        <h1 className="threads__title">Threads</h1>
        {this.renderNewThreadLink()}

        <ul className="threads__list">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boards.activeBoard,
  authed: state.auth.authenticated
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Threads);
