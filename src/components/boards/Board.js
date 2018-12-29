import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive } from "../../actions/boards";
import Threads from "./Threads";
import isObjectEmpty from "../../helpers/isObjectEmpty";
import "../../styles/board.css";

class Board extends Component {
  componentDidMount() {
    this.props.setActive(this.props.match.params.board);
  }

  render() {
    if (isObjectEmpty(this.props.board)) {
      return <div>loading...</div>;
    }
    return (
      <section>
        <h1 className="board__title">{this.props.board.name}</h1>
        <Threads />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boards.activeBoard
});

export default connect(
  mapStateToProps,
  { setActive }
)(Board);
