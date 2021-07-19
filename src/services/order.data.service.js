import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
}

export default new OrderDataService();
