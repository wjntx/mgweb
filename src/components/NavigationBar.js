import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    
    .navbar-brand, .navlink {
        color: #bbb;
        text-decoration: inherit;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">MicroGate</Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><NavLink to="/" className="navlink px-2"> Home </NavLink></Nav.Item>
                    <Nav.Item><NavLink to="/sales/"className="navlink px-2"> Sales </NavLink></Nav.Item>
                    <Nav.Item><NavLink to="/about/"className="navlink px-2"> About </NavLink></Nav.Item>
                    <Nav.Item><NavLink to="/contact/"className="navlink px-2"> Contact </NavLink></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)