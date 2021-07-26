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
import OrdersList from "./components/orders/OrdersList";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import OrderView from "./components/orders/OrderView";

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
          <Route exact path="/addresses">
            <AddressesList />
          </Route>
          <Route exact path="/addresses/:id/edit" component={AddressEdit} />
          <Route exact path="/customers">
            <CustomersList />
          </Route>
          <Route exact path="/customers/new" component={CustomerCreate} />
          <Route exact path="/orders">
            <OrdersList />
          </Route>
          <Route exact path="/customers/:id" component={CustomerView} />
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/customers/:id" component={CustomerView} />
          <Route exact path="/customers/:id/edit" component={CustomerEdit} />
          <Route exact path="/orders" component={OrderView}/>
        </Switch>
        <Switch>
          <Route exact path="/addresses/new">
            <AddressCreate />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;