import React, { PureComponent } from "react";

export default class Slider extends PureComponent {
  render() {
    const { children, style } = this.props;

    return (
      <div className="slider" style={style}>
        {children}
      </div>
    );
  }
}
