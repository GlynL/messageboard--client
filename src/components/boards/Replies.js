import React from "react";
import NewReply from "./NewReply";
import "../../styles/replies.css";

export const Replies = props => {
  const renderReplies = () =>
    props.replies.map(reply => (
      <li className="replies__list-item" key={reply._id}>
        <p>{reply.text}</p>
      </li>
    ));
  return (
    <div className="replies">
      <h1>Replies</h1>
      <ul className="replies__list">{renderReplies()}</ul>
      <NewReply />
    </div>
  );
};

export default Replies;
