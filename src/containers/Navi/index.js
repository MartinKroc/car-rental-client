import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from '../../resources/logo2.png'
import {Link, NavLink} from "react-router-dom";

export const Navi = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><NavLink to="/">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                Cartist-rent</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="/offers">Oferta</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/contact">Kontakt</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/opinions">Opinie</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/demo">Demo</NavLink></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link><NavLink to="/signin">Zaloguj/Zarejestruj</NavLink></Nav.Link>
                <NavDropdown title="Użytkownik" id="basic-nav-dropdown" className="mr-sm-4">
                    <NavDropdown.Item><NavLink to="/user">Panel użytkownika</NavLink></NavDropdown.Item>
                    <NavDropdown.Item>bieżące zamówienia</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Wyloguj</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}