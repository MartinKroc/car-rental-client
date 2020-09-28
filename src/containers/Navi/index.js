import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from '../../resources/logo2.png'
import {Link} from "react-router-dom";

export const Navi = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                Cartist-rent</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/offers">Oferta</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Kontakt</Link></Nav.Link>
                    <Nav.Link><Link to="/opinions">Opinie</Link></Nav.Link>
                    <Nav.Link><Link to="/demo">Demo</Link></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link><Link to="/signin">Zaloguj/Zarejestruj</Link></Nav.Link>
                <NavDropdown title="Użytkownik" id="basic-nav-dropdown" className="mr-sm-4">
                    <NavDropdown.Item><Link to="/user">Panel użytkownika</Link></NavDropdown.Item>
                    <NavDropdown.Item>bieżące zamówienia</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Wyloguj</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}