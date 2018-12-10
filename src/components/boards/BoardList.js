import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/boards";
import "../../styles/boards-list.css";

class BoardList extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  renderBoards() {
    return (
      <ul className="boards-list__list">
        {this.props.boards.boards.map(board => (
          <li className="boards-list__list-item" key={board._id}>
            <Link className="boards-list__list-item-link" to={`/${board.name}`}>
              {board.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="boards-list">{this.renderBoards()}</div>;
  }
}

const mapStateToProps = state => ({ boards: state.boards });

export default connect(
  mapStateToProps,
  actions
)(BoardList);
