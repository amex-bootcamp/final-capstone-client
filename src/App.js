import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import CustomersList from "./components/customers/CustomersList";
import ProductsList from "./components/products/ProductsList";
import CustomerEdit from "./components/customers/CustomerEdit";

function App() {
  return (
    <>
      <header>
        <h1>Dronology</h1>
      </header>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/addresses">
            <AddressesList />
          </Route>
          <Route exact path="/customers">
            <CustomersList />
          </Route>
          <Route exact path="/customer-edit">
            <CustomerEdit />
          </Route>
          <Route exact path="/products">
            <ProductsList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
