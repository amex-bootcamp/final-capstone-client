import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddressesList from "./components/addresses/AddressesList";
import CustomersList from "./components/customers/CustomersList";
import ProductsList from "./components/products/ProductsList";
import CustomerView from "./components/customers/CustomerView";
import AddressEdit from "./components/addresses/AddressEdit";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Dronology</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header>
        <h1>Dronology</h1>
      </header>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/addresses">
            <AddressesList />
          </Route>
          <Route exact path="/addresses/:id/edit" component={AddressEdit} />
          <Route exact path="/customers">
            <CustomersList />
          </Route>
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/customers/:id" component={CustomerView} />
        </Switch>
      </main>
    </>
  );
}

export default App;
