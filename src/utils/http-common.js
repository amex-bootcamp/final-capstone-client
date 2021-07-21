import axios from "axios";

const { NODE_ENV } = process.env;

// const baseURL =
//   NODE_ENV === "development"
//     ? "http://localhost:8080/api"
//     : "https://amexcsrapi.azurewebsites.net/";

const baseURL = "http://localhost:3004/api";

const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
