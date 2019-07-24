import React, { PureComponent } from "react";

export default class Paginator extends PureComponent {
  render() {
    const { slidesNum, currentIndex } = this.props;
    let dots = [];
    for (let i = 0; i < slidesNum; i++) {
      dots.push(
        <div key={i} className={i === currentIndex ? "selected" : "dot"}>
          &deg;
        </div>
      );
    }
    return <div className="paginator">{dots}</div>;
  }
}
