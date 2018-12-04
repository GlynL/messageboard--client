import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/boards";
import Threads from "./Threads";

class Board extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  componentDidUpdate() {
    this.props.setActive(this.props.boards, this.props.match.params.board);
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
        <h1>{this.props.board.name}</h1>
        <Threads />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boards.activeBoard,
  boards: state.boards.boards
});

export default connect(
  mapStateToProps,
  actions
)(Board);
