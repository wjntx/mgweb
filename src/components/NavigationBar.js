import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useState } from "react";

import MGLogo from '../assets/MGLogo.png'

const Styles = styled.div`
    .navbar {
        backgroundColor: rgba(211,211,211, 0.2);
    }

    .navbar-brand{
        font-size: 2.5rem;
        padding-left: 0px;
    }

    .navlink {
        font-size: 1.125rem;
        padding-top: .75px;
        &:hover {
            color: black;
            font-weight: 500;
        }
    }

    .navlinkdrop {
        color: black;
        text-decoration: inherit;
        &:hover {
            color: white;
        }
    }
    
    .navbar-brand, .navlink {
        color: #72192d;
        text-decoration: inherit;
    }
    .right.carousel-control, .left.carousel-control {
        display: none;
    }

    .dropdown .dropdown-menu .dropdown-item:active, .dropdown .dropdown-menu .dropdown-item:hover {
        background-color: #72192d !important;
        color: #fff;
    }
    
    #nav-dropdown{
        font-size: 1.125rem;
        color: #72192d;
        text-decoration: inherit;
        padding-top: .25px;
        padding-left: 7px;
        padding-bottom: 0;
        background-color: color: #72192d;
        &:hover {
            color: black;
            font-weight: 500;
        }
    }

    @media (min-width:992px) {
        .navbar {
          height: 75px;
        }
      }
`;

function NavigationBar() {
    const [expanded, setExpanded] = useState(false);
    return(
        <div style={{backgroundColor: "rgba(211,211,211, 0.2)"}}>
        <React.Fragment>
        <Container>
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Styles>
                        <Navbar expand="lg" expanded={expanded}>
                            <Navbar.Brand href="/"><Image src={MGLogo} rounded /></Navbar.Brand>
                            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} area-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Item><NavLink to="/" className="navlink px-2" onClick={() => setExpanded(false)}> Home </NavLink></Nav.Item>
                                    <NavDropdown title="Products" id="nav-dropdown">
                                        <NavDropdown.Item><NavLink className="navlinkdrop px-2" to="/synclink" onClick={() => setExpanded(false)}>SyncLink Hardware</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink className="navlinkdrop px-2" to="/synclink" onClick={() => setExpanded(false)}>Microgate Serial APIs</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink className="navlinkdrop px-2" to="/synclink" onClick={() => setExpanded(false)}>Services</NavLink></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Item><NavLink to="/sales/" className="navlink px-2" onClick={() => setExpanded(false)}> Sales </NavLink></Nav.Item>
                                    <Nav.Item><NavLink to="/about/"  className="navlink px-2" onClick={() => setExpanded(false)}> About </NavLink></Nav.Item>
                                    <Nav.Item><NavLink to="/contact/" className="navlink px-2" onClick={() => setExpanded(false)}> Contact </NavLink></Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Styles>   
                </Col>
            </Row>
        </Container>
        <hr />
        </React.Fragment>
        </div>
    );
}

export default NavigationBar;