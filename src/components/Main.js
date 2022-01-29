import react, { Component } from "react";
import img from "../assets/atl-main-page.png";

export default class Main extends Component {
  render() {
    return (
      <>
        <img
          className="about-image"
          src={img}
          alt={this.props.alt}
          style={{ height: "1000px" }}
          style={{ width: "1000px" }}
        />
      </>
    );
  }
}
