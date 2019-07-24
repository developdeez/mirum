import React, { PureComponent } from "react";

export default class Arrow extends PureComponent {
  render() {
    const { left, onClick } = this.props;
    let arrow;
    if (left) {
      arrow = (
        <div className="arrow left" onClick={onClick}>
          &lt;
        </div>
      );
    } else {
      arrow = (
        <div className="arrow right" onClick={onClick}>
          &gt;
        </div>
      );
    }
    return arrow;
  }
}
