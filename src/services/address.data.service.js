import http from "../utils/http-common";

// calls API via service
class AddressDataService {
  // gives list of all addresses
  list() {
    return http.get("/addresses");
  }

  // view a specific address by id
  view(id) {
    return http.get(`/addresses/${id}`);
  }

  // delete an address by given id
  delete(id) {
    return http.delete(`/addresses/${id}`);
  }

  // create a new address
  post(params) {
    return http.post("/addresses", params);
  }

  // update an addresss by id
  put(id, params) {
    return http.put(`/addresses/${id}`, params);
  }
}

export default new AddressDataService();
