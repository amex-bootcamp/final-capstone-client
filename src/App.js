import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import CustomerCreate from "./components/customers/CustomerCreate";
import CustomersList from "./components/customers/CustomersList";
import ProductsList from "./components/products/ProductsList";
import CustomerView from "./components/customers/CustomerView";
import CustomerEdit from "./components/customers/CustomerEdit";
import AddressEdit from "./components/addresses/AddressEdit";
import AddressCreate from "./components/addresses/AddressCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import OrderEdit from "./components/orders/OrderEdit";
import ProductView from "./components/products/ProductView"

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/orders/:id/edit" component={OrderEdit} />

          <Route exact path="/addresses">
            <AddressesList />
          </Route>
          <Route exact path="/addresses/:id/edit" component={AddressEdit} />
          <Route exact path="/customers">
            <CustomersList />
          </Route>
          <Route exact path="/customers/new" component={CustomerCreate} />
          <Route exact path="/customers/:id" component={CustomerView} />
          <Route exact path="/products">
            <ProductsList />
          </Route>
    <Route exact path="/products/:id" component={ProductView} />
          <Route exact path="/customers/:id" component={CustomerView} />
          <Route exact path="/customers/:id/edit" component={CustomerEdit} />
        </Switch>
        <Switch>
          <Route exact path="/addresses/new">
            <AddressCreate />
          </Route>
          {/* <Route exact path="/addresses">
            <AddressesList />
          </Route> */}
        </Switch>
      </main>
    </>
  );
}

export default App;
