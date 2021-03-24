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
        padding-top: 20px;
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
        }
    }

    .navlinkdrop {
        color: black;
        text-decoration: inherit;
    }

    .navlinkdrophover {
        color: white;
        text-decoration: inherit;
    }

    .navitem {
        padding-right: 3px;
    }
    
    .navbar-brand, .navlink {
        color: #72192d;
        text-decoration: inherit;
    }
    .right.carousel-control, .left.carousel-control {
        display: none;
    }

    .dropdown .dropdown-menu .dropdown-item:active, .dropdown .dropdown-menu .dropdown-item:hover {
        background-color: #72192d;
        color: #fff;
        
    }
    
    #nav-dropdown{
        font-size: 1.125rem;
        color: #72192d;
        text-decoration: inherit;
        padding-top: .25px;
        padding-left: 7px;
        padding-bottom: 0;
        padding-right: 10px;
        background-color: color: #72192d;
        &:hover {
            color: black;
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
    const [expanded1, setExpanded1] = useState(false);
    const [hovered0, setHovered0] = useState(false);
    const toggleHover0 = () => setHovered0(!hovered0);
    const [hovered1, setHovered1] = useState(false);
    const toggleHover1 = () => setHovered1(!hovered1);
    const [hovered2, setHovered2] = useState(false);
    const toggleHover2 = () => setHovered2(!hovered2);
    const [hovered3, setHovered3] = useState(false);
    const toggleHover3 = () => setHovered3(!hovered3);
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
                                    <Nav.Item className="navitem"><NavLink to="/" className="navlink px-2" onClick={() => setExpanded(false)}> Home </NavLink></Nav.Item>
                                    <Nav.Item className="navitem"><NavLink to="/sales/" className="navlink px-2" onClick={() => setExpanded(false)}> Sales </NavLink></Nav.Item>
                                    <NavDropdown title="Products " id="nav-dropdown">
                                        <NavDropdown.Item onMouseEnter={toggleHover0} onMouseLeave={toggleHover0}><NavLink className={hovered0 ? "navlinkdrophover px-2" : 'navlinkdrop px-2'} to="/synclink" onClick={() => setExpanded(false)}>SyncLink Hardware</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item onMouseEnter={toggleHover1} onMouseLeave={toggleHover1}><NavLink className={hovered1 ? "navlinkdrophover px-2" : 'navlinkdrop px-2'} to="/apiwin" onClick={() => setExpanded(false)}> Windows Serial API </NavLink></NavDropdown.Item>
                                        <NavDropdown.Item onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}><NavLink className={hovered2 ? "navlinkdrophover px-2" : 'navlinkdrop px-2'} to="/apilin" onClick={() => setExpanded(false)}> Linux Serial API </NavLink></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title=" Services " id="nav-dropdown">
                                        <NavDropdown.Item onMouseEnter={toggleHover0} onMouseLeave={toggleHover0}><NavLink className={hovered0 ? "navlinkdrophover px-2" : 'navlinkdrop px-2'} to="/synclink" onClick={() => setExpanded(false)}>Developers/OEMs</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item onMouseEnter={toggleHover1} onMouseLeave={toggleHover1}><NavLink className={hovered1 ? "navlinkdrophover px-2" : 'navlinkdrop px-2'} to="/apiwin" onClick={() => setExpanded(false)}>Design Services</NavLink></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Item className="navitem"><NavLink to="/about/"  className="navlink px-2" onClick={() => setExpanded(false)}> About </NavLink></Nav.Item>
                                    <Nav.Item className="navitem"><NavLink to="/contact/" className="navlink px-2" onClick={() => setExpanded(false)}>Contact</NavLink></Nav.Item>
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