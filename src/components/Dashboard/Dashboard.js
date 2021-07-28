import React, { Component } from "react";
// import logo from "../../../public/images/logo.png";
import { Image } from "react-bootstrap";
class Dashboard extends Component {
  render() {
    const backgroundImage = {
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
      backgroundImage: "url(/images/droneSetOutPic.jpg)",
      width: "100vw",
      height: "100vh",
    };
    return (
      <div style={backgroundImage}>
        <h1>CSR Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
