import React, { Component } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  CardColumns,
} from "react-bootstrap";

class Dashboard extends Component {
  render() {
    const backgroundImage = {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1486611367184-17759508999c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80)",
      position: " absolute",
      minWidth: "100%",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    const button = {
      backgroundColor: "#457B9D",
      borderColor: "#e63946",
      color: "#f1faee",
      fontWeight: "bold",
      borderWidth: "medium",
    };
    const containerStyle = {
      fontFamily: "Lato, sans-serif",
      color: "#f1faee",
      fontWeight: "bold",
      display: "grid",
      gridRowGap: "25px",
      gridColumnGap: "25px",
      gridTemplateColumns: "repeat(auto-fill,minmax(350px,4fr))",
    };
    const cardStyle = {
      width: "18rem",
      paddingTop: "5%",
      marginTop: "40%",
    };

    return (
      <div style={backgroundImage}>
        <Container
          className="d-flex flex-wrap justify-content-between"
          style={containerStyle}
        >
          <CardColumns className="d-flex flex-wrap justify-content-between">
            <Row>
              <Col>
                <Card style={cardStyle} md={6}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M86,34.4c-18.24347,0 -25.8,11.70173 -25.8,25.8c0,4.7472 2.27317,9.51823 2.27317,9.51823c-0.9116,0.52747 -2.42762,2.20384 -2.04922,5.16224c0.7052,5.51547 3.09968,6.90642 4.62474,7.02109c0.57907,5.14853 6.11917,11.74097 8.0513,12.69844v7.69297c-4.3,12.9 -38.7,10.94036 -38.7,41.04036h103.2c0,-30.1 -34.4,-28.14036 -38.7,-41.04036v-7.69297c1.93787,-0.95747 7.47224,-7.54991 8.0513,-12.69844c1.52507,-0.11467 3.91954,-1.50562 4.62474,-7.02109c0.37839,-2.96413 -1.13762,-4.63478 -2.04922,-5.16224c0,0 2.27317,-4.30663 2.27317,-9.51823c0,-10.4404 -4.09933,-19.35 -12.9,-19.35c0,0 -3.05587,-6.45 -12.9,-6.45zM129,45.85547c-2.93547,0 -5.43323,0.53096 -7.72656,1.28776c1.2556,3.89293 1.99323,8.23504 1.99323,13.05677c0,3.05013 -0.47846,5.84647 -1.0862,8.18567c0.83133,2.4596 1.11692,5.16439 0.76146,7.93933c-0.8084,6.3124 -3.25922,10.60272 -6.33802,13.30312c-0.8944,2.16721 -2.1191,4.22045 -3.43776,6.18126c1.62827,3.34253 4.01172,6.31831 5.08386,6.92031v0.06719c11.6788,5.47533 30.81667,14.67912 30.81667,40.53646h22.93333c0,-28.42587 -28.66667,-24.34427 -32.25,-36.52761v-4.08724c1.61107,-0.90587 6.22595,-7.1311 6.70755,-11.99297c1.26707,-0.10893 3.26728,-1.41757 3.85208,-6.62917c0.31533,-2.79787 -0.94528,-4.3723 -1.70208,-4.8711c0,0 1.89245,-4.07846 1.89245,-8.99192c0,-9.86133 -3.41707,-18.275 -10.75,-18.275c0,0 -2.5456,-6.10286 -10.75,-6.10286zM43,45.86667c-8.2044,0 -10.75,6.09167 -10.75,6.09167c-7.33293,0 -10.75,8.42486 -10.75,18.2862c0,4.9192 1.89245,8.98073 1.89245,8.98073c-0.76253,0.49307 -2.01742,2.07323 -1.70208,4.8711c0.5848,5.2116 2.58502,6.53143 3.85208,6.64036c0.4816,4.86187 5.09649,11.0871 6.70755,11.99297v4.07604c-3.58333,12.1776 -32.25,8.10174 -32.25,36.52761h22.93333c0,-25.85733 19.13787,-35.05539 30.81667,-40.53646v-0.07839c1.07213,-0.602 3.45559,-3.56085 5.08386,-6.90911c-1.31867,-1.9608 -2.54336,-4.02525 -3.43776,-6.19245c-3.0788,-2.69467 -5.53535,-6.98526 -6.33802,-13.29192c-0.3612,-2.80933 -0.06468,-5.55757 0.78385,-8.04011c-0.6192,-2.3564 -1.10859,-5.15516 -1.10859,-8.08489c0,-4.74147 0.67125,-9.10023 1.89245,-13.07917c-2.26467,-0.7396 -4.73045,-1.25417 -7.62578,-1.25417z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/customers">
                    View All Customers
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M86,11.47786c-24.3208,0 -34.4,15.6004 -34.4,34.4c0,6.3296 3.02344,12.68724 3.02344,12.68724c-1.21547,0.69947 -3.21443,2.91979 -2.7099,6.86432c0.94027,7.35587 4.12925,9.22906 6.15885,9.38386c0.774,6.8628 8.14761,15.64152 10.72761,16.92005v11.46667c-5.73333,17.2 -51.6,5.73333 -51.6,45.86667h66.06771c-1.90921,-5.38933 -3.00104,-11.15707 -3.00104,-17.2c0,-20.29027 11.73945,-37.79127 28.76745,-46.225c2.34493,-3.268 4.49216,-7.29092 4.89349,-10.82839c2.0296,-0.1548 5.21858,-2.02799 6.15885,-9.38386c0.50454,-3.95027 -1.49443,-6.16485 -2.70989,-6.86432c0,0 3.02344,-5.74417 3.02344,-12.68724c0,-13.92053 -5.46387,-25.8 -17.2,-25.8c0,0 -4.0764,-8.6 -17.2,-8.6zM131.86667,91.73333c-22.16507,0 -40.13333,17.96827 -40.13333,40.13333c0,22.16507 17.96827,40.13333 40.13333,40.13333c22.16507,0 40.13333,-17.96827 40.13333,-40.13333c0,-22.16507 -17.96827,-40.13333 -40.13333,-40.13333zM131.86667,108.93333c3.1648,0 5.73333,2.5628 5.73333,5.73333v11.46667h11.46667c3.1648,0 5.73333,2.5628 5.73333,5.73333c0,3.17053 -2.56853,5.73333 -5.73333,5.73333h-11.46667v11.46667c0,3.17053 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333v-11.46667h-11.46667c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333c0,-3.17053 2.56853,-5.73333 5.73333,-5.73333h11.46667v-11.46667c0,-3.17053 2.56853,-5.73333 5.73333,-5.73333z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/customers/new">
                    Create Customer
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M86,15.0472l-78.83333,70.9528h21.5v64.5h59.44694c-1.3545,-4.54367 -2.11361,-9.3525 -2.11361,-14.33333h-43v-63.14225l43,-38.6888l57.61328,51.66439h21.22006zM136.19466,100.24935c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333c0,19.78717 16.04617,35.83333 35.83333,35.83333c19.78717,0 35.83333,-16.04617 35.83333,-35.83333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM150.89193,119.24382l10.02213,10.03613l-28.30274,28.30274l-21.13606,-21.13607l10.02213,-10.03613l11.11393,11.11393z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/addresses">
                    View All Addresses
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M86,15.0472l-78.83333,70.9528h21.5v64.5h114.66667v-64.5h21.5zM86,34.33561l43,38.7028v5.79492v57.33333h-86v-63.12826zM86,64.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,102.125c-9.5675,0 -21.5,5.1656 -21.5,14.69726v5.01107h43v-5.01107c0,-9.53167 -11.9325,-14.69726 -21.5,-14.69726z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/addresses/new">
                    Create New Address
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M20.64,6.88v151.36h89.44v-6.88h-82.56v-137.6h116.96v82.56h6.88v-89.44zM48.16,37.84v6.88h75.68v-6.88zM48.16,82.56v6.88h13.76v-6.88zM72.24,82.56v6.88h51.6v-6.88zM48.16,103.2v6.88h13.76v-6.88zM72.24,103.2v6.88h31.59156c-0.38969,-1.075 -0.63156,-2.23062 -0.63156,-3.44c0,-1.20937 0.24188,-2.365 0.63156,-3.44zM113.52,103.2c-2.06937,0 -3.44,1.37063 -3.44,3.44c0,2.06938 1.37063,3.44 3.44,3.44h3.44v10.32c0,4.81063 2.40531,9.28531 6.54406,12.72531l5.49594,4.47469l-5.16,4.47469c-4.47469,3.44 -6.88,7.56531 -6.88,12.72531v10.32h-3.44c-2.06937,0 -3.44,1.37063 -3.44,3.44c0,2.06938 1.37063,3.44 3.44,3.44h55.04c2.06938,0 3.44,-1.37062 3.44,-3.44c0,-2.06937 -1.37062,-3.44 -3.77594,-3.44h-3.10406v-10.32c0,-4.81062 -2.06937,-9.28531 -6.54406,-12.72531l-5.16,-4.47469l5.16,-4.47469c4.47469,-3.44 6.54406,-7.91469 6.54406,-12.72531v-10.32h3.44c2.06938,0 3.44,-1.37062 3.44,-3.44c0,-2.06937 -1.37062,-3.44 -3.44,-3.44zM123.84,110.08h34.4v10.32c0,2.75469 -1.03469,5.16 -3.77594,7.56531l-8.26406,6.88c-1.03469,0.68531 -1.38406,1.72 -1.38406,2.75469c0,1.03469 0.34938,2.05594 1.38406,2.40531l8.26406,7.22937c2.74125,2.40531 3.77594,4.47469 3.77594,7.56531v10.32h-6.88c0,-6.88 -10.32,-13.76 -10.32,-13.76c0,0 -10.32,6.88 -10.32,13.76h-6.88v-10.32c0,-3.09062 1.37063,-5.16 4.12531,-7.56531l8.25062,-6.88c1.03469,-0.68531 1.38406,-1.72 1.38406,-2.75469c0,-1.03469 -0.34937,-2.05594 -1.38406,-2.40531l-8.25062,-7.22937c-2.75469,-2.40531 -4.12531,-4.81063 -4.12531,-7.56531zM130.72,120.4c0,7.56531 10.32,10.32 10.32,10.32c0,0 10.32,-2.75469 10.32,-10.32zM48.16,123.84v6.88h13.76v-6.88zM72.24,123.84v6.88h40.51406c-1.1825,-2.17687 -1.97531,-4.48812 -2.35156,-6.88z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/orders">
                    View All Orders
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M20.64,6.88v158.24h86.25531c-1.89544,-2.11216 -3.58115,-4.41008 -5.01219,-6.88h-74.36313v-144.48h116.96v83.17813c2.37016,0.39904 4.66464,0.99615 6.88,1.78047v-91.8386zM44.72,37.84v6.88h82.56v-6.88zM44.72,86v6.88h13.76v-6.88zM68.8,86v6.88h58.48v-6.88zM137.6,103.2c-18.92,0 -34.4,15.48 -34.4,34.4c0,18.92 15.48,34.4 34.4,34.4c18.92,0 34.4,-15.48 34.4,-34.4c0,-18.92 -15.48,-34.4 -34.4,-34.4zM44.72,106.64v6.88h13.76v-6.88zM68.8,106.64v6.88h35.32047c1.81976,-2.52496 3.90612,-4.82976 6.235,-6.88zM137.6,110.08c15.136,0 27.52,12.384 27.52,27.52c0,15.136 -12.384,27.52 -27.52,27.52c-15.136,0 -27.52,-12.384 -27.52,-27.52c0,-15.136 12.384,-27.52 27.52,-27.52zM137.6,117.30265c-2.064,0 -3.44,1.376 -3.44,3.44v13.41735h-13.41735c-2.064,0 -3.44,1.376 -3.44,3.44c0,2.064 1.376,3.44 3.44,3.44h13.41735v13.41735c0,2.064 1.376,3.44 3.44,3.44c2.064,0 3.44,-1.376 3.44,-3.44v-13.41735h13.41735c2.064,0 3.44,-1.376 3.44,-3.44c0,-2.064 -1.376,-3.44 -3.44,-3.44h-13.41735v-13.41735c0,-2.064 -1.376,-3.44 -3.44,-3.44zM44.72,127.28v6.88h13.76v-6.88zM68.8,127.28v6.88h27.69469c0.19608,-2.35984 0.6013,-4.65088 1.17578,-6.88z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/orders/new">
                    Create New Order
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                        // style=" fill:#000000;"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          // style="mix-blend-mode: normal"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M14.33333,28.66667v14.33333h21.5v14.33333h-14.33333v14.33333h43v14.33333h-6.36882c-16.13283,0 -29.46452,13.06708 -29.46452,29.12858v28.20475h14.33333v-28.20475c0,-8.20483 6.62501,-14.79525 15.13118,-14.79525h55.73763c8.50617,0 15.13118,6.59042 15.13118,14.79525v28.20475h14.33333v-28.20475c0,-16.0615 -13.33169,-29.12858 -29.46452,-29.12858h-6.36882v-14.33333h43v-14.33333h-14.33333v-14.33333h21.5v-14.33333h-57.33333v14.33333h21.5v14.33333h-71.66667v-14.33333h21.5v-14.33333zM78.83333,114.66667l-3.58333,7.16667h-10.75v21.5h43v-21.5h-10.75l-3.58333,-7.16667z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/products">
                    View All Products
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={cardStyle} md={4}>
                  <Card.Body>
                    <h1 className="d-flex justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                        // style=" fill:#000000;"
                      >
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          // style="mix-blend-mode: normal"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#1d3557">
                            <path d="M14.33333,28.66667v14.33333h21.5v14.33333h-14.33333v14.33333h43v14.33333h-6.36882c-16.13283,0 -29.46452,13.06708 -29.46452,29.12858v28.20475h14.33333v-28.20475c0,-8.20483 6.62501,-14.79525 15.13118,-14.79525h55.73763c8.50617,0 15.13118,6.59042 15.13118,14.79525v28.20475h14.33333v-28.20475c0,-16.0615 -13.33169,-29.12858 -29.46452,-29.12858h-6.36882v-14.33333h43v-14.33333h-14.33333v-14.33333h21.5v-14.33333h-57.33333v14.33333h21.5v14.33333h-71.66667v-14.33333h21.5v-14.33333zM78.83333,114.66667l-3.58333,7.16667h-10.75v21.5h43v-21.5h-10.75l-3.58333,-7.16667z"></path>
                          </g>
                        </g>
                      </svg>
                    </h1>
                  </Card.Body>
                  <Button style={button} href="/products/new">
                    Create New Product
                  </Button>
                </Card>
              </Col>
            </Row>
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
