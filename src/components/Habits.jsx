import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함.
  // 증가
  handleIncrement = (id) => {
    console.log(id);
    const newHabits = this.state.habits.map((habit) => {
      if (habit.id === id) {
        return {
          id: habit.id,
          name: habit.name,
          count: habit.count + 1,
        };
      } else {
        return habit;
      }
    });
    this.setState(() => {
      return { habits: newHabits };
    });
  };
  // 감소
  handleDecrement = (id) => {
    const newHabits = this.state.habits.map((habit) => {
      if (habit.count > 0 && habit.id === id) {
        return {
          id: habit.id,
          name: habit.name,
          count: habit.count - 1,
        };
      } else {
        return habit;
      }
    });
    this.setState(() => {
      return { habits: newHabits };
    });
  };
  // 삭제
  handleDelete = (id) => {
    const newHabits = this.state.habits.filter((habit) => {
      return habit.id !== id;
    });
    this.setState(() => {
      return { habits: newHabits };
    });
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit, index) => {
          return (
            <Habit
              key={habit && habit.id}
              habit={habit}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default Habits;
