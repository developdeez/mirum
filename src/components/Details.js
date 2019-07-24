import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Details extends PureComponent {
  render() {
    const { image, title, description } = this.props.location.state.item;

    return (
      <>
        <header className="header small">
          <h1>{title}</h1>
        </header>
        <main className="main row">
          <div style={{ flex: 1 }} />
          <div style={{ flex: 6, flexDirection: "column" }}>
            <div style={{ flex: 1, marginBottom: "1%", marginTop: "1%" }}>
              <Link
                to={{
                  pathname: "/"
                }}
              >
                Home
              </Link>
              /{title}
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    flex: 2
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    display: "flex"
                  }}
                >
                  <div className="detailsThumb" />{" "}
                  <div className="detailsThumb" />{" "}
                  <div className="detailsThumb" />{" "}
                  <div className="detailsThumb" />{" "}
                  <div className="detailsThumb" />
                </div>
              </div>{" "}
              <div style={{ flex: 1, overflowY: "scroll" }}>
                <p>
                  Why do we use it? It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                </p>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }} />
        </main>
      </>
    );
  }
}
