import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import ProductsList from "./components/products/ProductsList";

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
          <Route exact path="/products">
            <ProductsList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
