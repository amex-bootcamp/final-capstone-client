import http from "../utils/http-common";

class OrderDataService {
  list() {
    return http.get( "/orders" );
  }

  // view a specific order by id
  view( id ) {
    return http.get( `/orders/${ id }` );
  }

  // delete an order by id
  delete( id ) {
    return http.delete( `/orders/${ id }` );
  }

}

export default new OrderDataService();
