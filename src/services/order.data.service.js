import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
  // view a specific customer by id
  view(id) {
    return http.get(`/orders/${id}`);
  }
  // update an customer by id
  put(id, params) {
    return http.put(`/orders/${id}`, params);
  }
  post(params) {
    return http.post("/orders", params);
  }
  listByStatus(status) {
    return http.get(`/orders?status=${status}`);
  }
}


export default new OrderDataService();
