import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    console.log("header");
    return (
      <header>
        <h1 className="header__title">
          <i className="fas fa-leaf"></i>
          Habit Tracker{" "}
          <span style={{ backgroundColor: "green" }} className="havit-count">
            {this.props.habitTotalCount}
          </span>
        </h1>
      </header>
    );
  }
}

export default Header;
