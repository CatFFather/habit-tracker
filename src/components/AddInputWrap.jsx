import React, { Component } from "react";

class AddInputWrap extends Component {
  inputRef = React.createRef(); // DOM 에 접근 가능
  inputDataAdd = () => {
    let value = this.inputRef.current.value;
    value && this.props.addHabit(value);
    this.inputRef.current.value = null; // input 초기화
    // document.querySelector(".habit__add__input").value = null;  이런식으로 DOM에 접근하지말고 Ref를 사용하면 됨
  };
  render() {
    return (
      <div className="habit__add__input__wrap">
        <input
          ref={this.inputRef}
          className="habit__add__input"
          // onChange={(e) => {
          //   this.props.setAddHabitValue(e.target.value);
          // }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              this.inputDataAdd();
            }
          }}
          placeholder="Habit"
        ></input>
        <button onClick={this.inputDataAdd}>Add</button>
      </div>
    );
  }
}

export default AddInputWrap;
