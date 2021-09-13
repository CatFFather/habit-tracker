import React, { PureComponent } from "react";

// PureComponent 는 props와 state안에 들어 있는 데이터가 최상에 있는 데이터가 변하지 않으면 render함수가 호출 되지 않는다.
class AddInputWrap extends PureComponent {
  inputRef = React.createRef(); // DOM 에 접근 가능
  inputDataAdd = () => {
    let value = this.inputRef.current.value;
    value && this.props.addHabit(value);
    this.inputRef.current.value = null; // input 초기화
    // document.querySelector(".habit__add__input").value = null;  이런식으로 DOM에 접근하지말고 Ref를 사용하면 됨
  };
  render() {
    console.log("AddInputWrap!!!!!!!!!!!!!!!");
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
