import React from "react";
import BoardList from "./BoardList";

export default () => {
  return (
    <section>
      <header>
        <h1>All Boards</h1>
        <p>Click on a board to view threads.</p>
      </header>
      <BoardList />
    </section>
  );
};
