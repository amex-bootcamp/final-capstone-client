import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get("/orders");
  }
<<<<<<< HEAD
  listByStatus(status) {
    return http.get(`/orders?status=${status}`);
=======

  // view a specific order by id
  view(id) {
    return http.get(`/orders/${id}`);
>>>>>>> 4022f4204a1b91d1357fb74ed30fc3646ae761da
  }
}

export default new OrderDataService();
