import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  render() {
    const { id, name, count } = this.props.habit || {};
    const { handleIncrement, handleDecrement, handleDelete } = this.props;
    return (
      <li className="habit">
        <span className="havit-name">{name}</span>
        <span className="havit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          name={id}
          onClick={(e) => {
            handleIncrement(e);
          }}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          name={id}
          onClick={(e) => {
            handleDecrement(e);
          }}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          name={id}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
