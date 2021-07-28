import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
  post(params) {
    return http.post("/orders", params);
  }
  listByStatus(status) {
    return http.get(`/orders?status=${status}`);
  }
}

export default new OrderDataService();
