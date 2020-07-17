import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { HashRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Router>
        <Navbar expand="lg">
            <Navbar.Brand href="/">MicroGate</Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link to="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Link to="/sales">Sales</Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Router>
    </Styles>
)