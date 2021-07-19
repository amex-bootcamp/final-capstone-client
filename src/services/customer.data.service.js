import http from "../utils/http-common";

class CustomerDataService {
  list() {
    return http.get("/customers");
  }
}

export default new CustomerDataService();
