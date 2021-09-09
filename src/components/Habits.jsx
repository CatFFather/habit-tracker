import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  render() {
    const { handleIncrement, handleDecrement, handleDelete } = this.props;
    return (
      <ul>
        {this.props.habits.map((habit, index) => {
          return (
            <Habit
              key={habit && habit.id}
              habit={habit}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default Habits;
