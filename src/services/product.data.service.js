import http from "../utils/http-common";

class ProductDataService {
  list() {
    return http.get("/products");
  }

  view(id) {
    return http.get(`/products/${id}`);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  post(params) {
    return http.post("/products", params);
  }

  put(id, params) {
    return http.put(`/products/${id}`, params);
  }
}

export default new ProductDataService();
