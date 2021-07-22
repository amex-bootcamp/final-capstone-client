import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import CustomersList from "./components/customers/CustomersList";
import ProductsList from "./components/products/ProductsList";
import CustomerView from "./components/customers/CustomerView";
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
