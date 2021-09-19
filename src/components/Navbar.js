import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact"
import Renders from "./Renders"
import Electrical from "./Electrical"
import Weldment from "./Weldment"
import Gallery from "./Gallery"
import Home from "./Home"

export default class navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/"} className="mx-2">
                <img
                  src="./Logo_RB.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Brand as={Link} to={"/"}>Solidworks Users</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/gallery"}>
                    Gallery
                  </Nav.Link>
                  <NavDropdown title="Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/weldment"}>
                      Weldment
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/electrical"}>
                      Electrical
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/renders"}>
                      Renders
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to={"/contact"}>
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mx-2"
                    aria-label="Search"
                  />
                  <Button className="mx-2" variant="outline-light">
                    Search
                  </Button>
                </Form>
                <Nav>
                  <Nav.Link href="#deets">Register</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Sigin
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/renders">
              <Renders />
            </Route>
            <Route path="/electrical">
              <Electrical />
            </Route>
            <Route path="/weldment">
              <Weldment />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}