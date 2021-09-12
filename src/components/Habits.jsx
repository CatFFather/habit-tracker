import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  render() {
    const {
      habits, // 습관들
      handleIncrement, // 증가 함수
      handleDecrement, // 감소 함수
      handleDelete, // 삭제 함수
      resetHabits, // 리셋 함수
    } = this.props;
    return (
      <>
        <ul>
          {habits.map((habit, index) => {
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
        <button onClick={resetHabits}>Reset All</button>
      </>
    );
  }
}

export default Habits;
