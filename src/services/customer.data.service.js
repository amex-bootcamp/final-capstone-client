import http from "../utils/http-common";

class CustomerDataService {
  // list customer data
  list() {
    return http.get("/customers");
  }
  // view a specific customerby id
  view(id) {
    return http.get(`/customers/${id}`);
  }

  // delete an customerby given id
  delete(id) {
    console.log(id);
    return http.delete(`/customers/${id}`);
  }

  // create a new customer
  post(params) {
    return http.post("/customers", params);
  }

  // update an customer by id
  put(id, params) {
    return http.put(`/customers/${id}`, params);
  }
}

export default new CustomerDataService();
