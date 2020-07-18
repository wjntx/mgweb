import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .navbar-brand{
        font-size: 2.5rem;
    }

    .navlink {
        font-size: 1.125rem;
        &:hover {
            color: black;
            font-weight: 500;
        }
    }
    
    .navbar-brand, .navlink {
        color: #72192d;
        text-decoration: inherit;
    }
    .right.carousel-control, .left.carousel-control {
        display: none;
    }

    @media (min-width:992px) {
        .navbar {
          height: 75px;
        }
      }
`;

export const NavigationBar = () => (
    <React.Fragment>
    <Container>
        <Row>
            <Col md={{ span: 12, offset: 0 }}>
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
            </Col>
        </Row>
        
    </Container>
    <hr />
    </React.Fragment>
)