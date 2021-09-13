import React, { PureComponent } from "react";

class Habit extends PureComponent {
  render() {
    console.log("habit");
    const { id, name, count } = this.props.habit || {};
    const { handleIncrement, handleDecrement, handleDelete } = this.props;
    return (
      <li className="habit">
        <span className="havit-name">{name}</span>
        <span className="havit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={() => {
            handleIncrement(id);
          }}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={() => {
            handleDecrement(id);
          }}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
