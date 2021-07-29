import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
  // update an customer by id
  put(id, params) {
    return http.put(`/orders/${id}`, params);
  }
}


export default new OrderDataService();
