import React from "react";
import { connect } from "react-redux";
import NewReply from "./NewReply";

const Replies = props => {
  const renderReplies = () =>
    props.thread.replies.map(reply => (
      <li key={reply._id}>
        <p>{reply.text}</p>
      </li>
    ));
  return (
    <div>
      <h1>Replies</h1>
      <ul>{renderReplies()}</ul>
      <NewReply />
    </div>
  );
};

const mapStateToProps = state => ({ thread: state.threads.activeThread });

export default connect(mapStateToProps)(Replies);
