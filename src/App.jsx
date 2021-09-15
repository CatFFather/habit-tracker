import React, { Component } from "react";
import "./app.css";
import Header from "./components/Header";
import AddInputWrap from "./components/AddInputWrap";
import Habits from "./components/Habits";

class App extends Component {
  state = {
    // addHabitValue: null, state로 관리 할 필요 없음 Ref로 input 접근
    habits: JSON.parse(localStorage.getItem("habits")) || [],
    seq: JSON.parse(localStorage.getItem("habits-seq")) || 0,
  };

  // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함.
  // 증가
  handleIncrement = (id) => {
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
    // localStorage에 저장
    localStorage.setItem("habits", JSON.stringify(newHabits));
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
    // localStorage에 저장
    localStorage.setItem("habits", JSON.stringify(newHabits));
  };
  // 삭제
  handleDelete = (id) => {
    const newHabits = this.state.habits.filter((habit) => {
      return habit.id !== id;
    });
    this.setState(() => {
      return { habits: newHabits };
    });
    // localStorage에 저장
    localStorage.setItem("habits", JSON.stringify(newHabits));
  };

  // // input창 컨트롤  -- > 필요 없음
  // setAddHabitValue = (value) => {
  //   this.setState(() => {
  //     return { addHabitValue: value };
  //   });
  // };

  // Add 버튼 이벤트
  addHabit = (value) => {
    const newHabits = [
      ...this.state.habits,
      {
        id: this.state.seq,
        name: value,
        count: 0,
      },
    ];
    this.setState(() => {
      return { habits: newHabits, seq: this.state.seq + 1 };
    });

    // localStorage에 저장
    localStorage.setItem("habits", JSON.stringify(newHabits));
    localStorage.setItem("habits-seq", this.state.seq + 1);
  };

  // reset 버튼 이벤트 (각각의 habit의 count만 0으로 reset)
  resetHabits = () => {
    const newHabits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return {
          ...habit,
          count: 0,
        };
      } else {
        return habit;
      }
    });
    console.log(newHabits);
    this.setState(() => {
      return { habits: newHabits };
    });
    // localStorage에 저장
    localStorage.setItem("habits", JSON.stringify(newHabits));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header
          // habitTotalCount 는 count가 1보다 큰것들만 추출
          habitTotalCount={
            this.state.habits.filter((habit) => {
              if (habit.count > 0) {
                return habit;
              }
            }).length
          }
        />
        <AddInputWrap addHabit={this.addHabit} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          resetHabits={this.resetHabits}
        />
      </>
    );
  }
}

export default App;
