import React from "react";
import { connect } from "react-redux";
import NewReply from "./NewReply";
import "../../styles/replies.css";

export const Replies = props => {
  const renderReplies = () =>
    props.thread.replies.map(reply => (
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

const mapStateToProps = state => ({ thread: state.threads.activeThread });

export default connect(mapStateToProps)(Replies);
