import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
  listByStatus(status) {
    return http.get(`/orders?status=${status}`);
  }
  view(id) {
    return http.get(`/orders/${id}`);
  }
}

export default new OrderDataService();
