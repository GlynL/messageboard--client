import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setActive } from "../../actions/boards";
import Threads from "./Threads";
import isObjectEmpty from "../../helpers/isObjectEmpty";
import "../../styles/board.css";
import Loader from "../common/Loader";

export class Board extends Component {
  componentDidMount() {
    this.props.setActive(this.props.match.params.board);
  }

  render() {
    if (isObjectEmpty(this.props.board)) {
      return <Loader />;
    }
    return (
      <section>
        <div className="board-header">
          <Link className="btn btn--danger board-header__link" to="/">
            Back To All Boards
          </Link>
          <h1 className="board-header__title">{this.props.board.name}</h1>
        </div>
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
