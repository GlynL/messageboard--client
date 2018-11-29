import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/boards";

class BoardList extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  renderBoards() {
    return (
      <ul>
        {
          // TODO: remove console.log
        }
        {this.props.boards.boards.map(
          board =>
            console.log(board) || (
              <li key={board._id}>
                <Link to={`/${board._id}`}>{board.name}</Link>
              </li>
            )
        )}
      </ul>
    );
  }

  render() {
    return <div>{this.renderBoards()}</div>;
  }
}

const mapStateToProps = state => ({ boards: state.boards });

export default connect(
  mapStateToProps,
  actions
)(BoardList);
