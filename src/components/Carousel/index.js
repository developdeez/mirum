import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Paginator from "../Carousel/Paginator";
import Arrow from "./Arrow";

export default class Carousel extends PureComponent {
  state = {
    currentIndex: 1,
    translateX: 0,
    items: [
      {
        image:
          "https://ichef.bbci.co.uk/news/800/cpsprodpb/CB11/production/_95158915_istock-80489031.jpg",
        title: "Ice Cream 4th and Imperial",
        description: "Found it lying there...what a waste"
      },
      {
        image:
          "https://ichef.bbci.co.uk/news/800/cpsprodpb/919B/production/_95157273_toast.istock.jpg",
        title: "Bread",
        description: "Found it lying there...what a waste"
      },
      {
        image:
          "https://assets3.thrillist.com/v1/image/1738419/size/tl-horizontal_main.jpg",
        title: "What's That",
        description: "Found it lying there...what a waste"
      },
      {
        image:
          "https://fsmedia.imgix.net/48/19/d4/35/60e9/4b2d/9b00/ca51d5568fde/its-not-still-good.jpeg",
        title: "5 seconds rule?",
        description: "Found it lying there...what a waste"
      },
      {
        image:
          "https://venturebeat.com/wp-content/uploads/2012/11/eating-food-on-the-ground.jpg",
        title: "/r/WeEatBees",
        description: "Found it lying there...what a waste"
      }
    ]
  };
  handleItem = (item, idx) => (
    <div className="item" key={idx}>
      <Link
        to={{
          pathname: "/details",
          state: { item }
        }}
      >
        <div
          className="image"
          style={{ backgroundImage: `url(${item.image})` }}
        />{" "}
      </Link>
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>
    </div>
  );
  prev = () => {
    this.setState(prevState => {
      let currentIndex = prevState.currentIndex;
      if (currentIndex > 1) {
        currentIndex -= 1;
      }
      return {
        currentIndex,
        translateX: currentIndex * 35
      };
    });
  };
  next = () => {
    this.setState(prevState => {
      let currentIndex = prevState.currentIndex;
      if (prevState.currentIndex < this.state.items.length - 1) {
        currentIndex += 1;
      }
      return {
        currentIndex,
        translateX: currentIndex * -35
      };
    });
  };
  render() {
    const { items, currentIndex, translateX } = this.state;
    let sliderStyle = {
      transform: `translateX(${translateX}%)`,
      transition: `0.2s`
    };
    return (
      <>
        <header className="header">
          <h1>XPLOR - Free food around your city</h1>
          <h2>words</h2>
        </header>
        <main className="main">
          <>
            <div className="carousel">
              <Arrow left onClick={this.prev} />
              <div className="sliderContainer">
                <Slider style={sliderStyle}>
                  {items &&
                    items.map((item, idx) => this.handleItem(item, idx))}
                </Slider>
              </div>
              <Arrow onClick={this.next} />
            </div>

            <Paginator slidesNum={items.length} currentIndex={currentIndex} />
          </>
        </main>
      </>
    );
  }
}
