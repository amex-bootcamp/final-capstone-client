import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import AddressCreate from "./components/addresses/AddressCreate";

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
