import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import CustomersList from "./components/customers/CustomersList";
import ProductsList from "./components/products/ProductsList";
import CustomerView from "./components/customers/CustomerView";
import CustomerEdit from "./components/customers/CustomerEdit";
import AddressCreate from "./components/addresses/AddressCreate";
import CustomerCreate from "./components/customers/CustomerCreate";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      {/* <header>
        <h1>Dronology</h1>
      </header> */}
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/addresses">
            <AddressesList />
          </Route>
          <Route exact path="/addresses/new" component={AddressCreate} />
          <Route exact path="/customers">
            <CustomersList />
          </Route>
          <Route exact path="/customers/new" component={CustomerCreate} />{" "}
          <Route exact path="/customers/:id" component={CustomerView} />
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/customers/:id" component={CustomerView} />
          <Route exact path="/customers/:id/edit" component={CustomerEdit} />
        </Switch>
      </main>
    </>
  );
}
export default App;