import React, { Component } from "react";
import "./app.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Habits from "./components/Habits";

class App extends Component {
  state = {
    addHabitValue: null,
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
  // input창 컨트롤
  setAddHabitValue = (value) => {
    this.setState(() => {
      return { addHabitValue: value };
    });
  };
  // Add 버튼 이벤트
  addHabit = () => {
    const newHabits = [
      ...this.state.habits,
      {
        id: this.state.habits.length + 1,
        name: this.state.addHabitValue,
        count: 0,
      },
    ];
    this.setState(() => {
      return { addHabitValue: null, habits: newHabits };
    });
    document.querySelector(".habit__add__input").value = null;
  };
  // reset 버튼 이벤트
  resetHabits = () => {
    this.setState(() => {
      return { habits: [] };
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header habitTotalCount={this.state.habits.length} />
        <div className="habit__add__input__wrap">
          <Input
            setAddHabitValue={this.setAddHabitValue}
            addHabit={this.addHabit}
          />
          <button onClick={this.addHabit}>Add</button>
        </div>

        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
        <button onClick={this.resetHabits}>Reset All</button>
      </>
    );
  }
}

export default App;
