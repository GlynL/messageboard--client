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
      </header>
      <BoardList />
      {props.authed && (
        <div>
          <Link className="btn" to="/new-board">
            Create New Board
          </Link>
        </div>
      )}
      {!props.authed && <p>Sign up to create a new board.</p>}
    </section>
  );
};

const mapStateToProps = state => ({ authed: state.auth.authenticated });

export default connect(mapStateToProps)(Boards);
