import http from "../utils/http-common";

class ProductDataService {
  list() {
    return http.get("/products");
  }
}

export default new ProductDataService();
