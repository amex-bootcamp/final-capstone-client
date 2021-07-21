import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
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
          <Route>
            <CustomerEdit 
              name={this.state.name}
              phone={this.state.phone}
              email={this.state.email} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
