import React, { Component } from "react";
// import logo from "../../../public/images/logo.png";
import { Image } from "react-bootstrap";
class Dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <Image
          src={process.env.PUBLIC_URL + "/images/longDronePic.jpg"}
          alt="longDronePic"
        />
      </>
    );
  }
}

export default Dashboard;
