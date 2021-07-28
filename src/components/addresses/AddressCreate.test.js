import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import AddressCreate from "./AddressCreate";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AddressCreate />
    </Router>,
    div
  );
});

it("renders Create New Address heading", () => {
  render(
    <Router>
      <AddressCreate />
    </Router>
  );
  expect(screen.getByText("Create New Address")).toBeInTheDocument();
});

// React Testing Library Documentation: https://testing-library.com/docs/react-testing-library/intro
