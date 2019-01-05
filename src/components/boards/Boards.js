import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BoardList from "./BoardList";
import "../../styles/boards.css";

export const Boards = props => {
  return (
    <section className="boards">
      <header className="boards__header">
        <h1 className="boards__header-title">All Boards</h1>
        <p>Click on a board to view threads.</p>
        {props.authed && <Link to="/new-board">Start a new Board.</Link>}
        {!props.authed && <p>Sign up to start a new board.</p>}
      </header>
      <BoardList />
    </section>
  );
};

const mapStateToProps = state => ({ authed: state.auth.authenticated });

export default connect(mapStateToProps)(Boards);
