import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
  post(params) {
    return http.post("/orders", params);
  }
}

export default new OrderDataService();
