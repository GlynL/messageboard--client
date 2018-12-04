import React from "react";
import { Link } from "react-router-dom";
import BoardList from "./BoardList";

export default () => {
  return (
    <section>
      <header>
        <h1>All Boards</h1>
        <p>Click on a board to view threads.</p>
        <Link to="/new-board">Start a new Board.</Link>
      </header>
      <BoardList />
    </section>
  );
};
