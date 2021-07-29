import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get( "/orders" );
  }

  // view a specific order by id
  view( id ) {
    return http.get( `/orders/${ id }` );
  }

  
  listByStatus(status) {
    return http.get(`/orders?status=${status}`);
  }

  // delete an order by id
  delete( id ) {
    return http.delete( `/orders/${ id }` );
  }

  post(params) {
    return http.post("/orders", params);
  }

 }

export default new OrderDataService();
