import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <>
        <input
          className="habit__add__input"
          onChange={(e) => {
            this.props.setAddHabitValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              this.props.addHabit();
            }
          }}
          placeholder="Habit"
        ></input>
      </>
    );
  }
}

export default Input;
