import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { Nav } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Styles = styled.div`
 hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

.main-footer {
     background-color: #f0f0f0;
     max-width: 100%;
 }

bot {
    color: #777;
    &:hover {
        color: #0000EE;
    }
}

h4 {
    color: #72192d;
    font-size: 1.15rem;
    font-weight: 600;
}

h5 {

}

li {
    padding: .5em;
}

ul {
    list-style: none;
    padding-left: 0;
    list-style-position: inside;
    padding-bottom: 0;
}

p {
    white-space: nowrap;
}

.navlink {
    color: black;
    font-weight: 500;
    &:hover {
        color: #0000EE;
    }
}
`;

export const Footer = () => (
    <React.Fragment>
        <Styles>
            <Container className="main-footer">
                <Layout>
                    <Row>
                        <Col className="col-md-4 col-sm-12 col-12">
                        <br />
                        <ul>
                            <li><h4>Products</h4></li>
                        </ul>
                            <ul>
                                <li><NavLink to="/sales/"className="navlink">SyncLink® USB</NavLink></li>
                                <li><NavLink to="/sales/"className="navlink">SyncLink® PCIe</NavLink></li>
                                <li><NavLink to="/sales/"className="navlink">SyncLink® GT4e</NavLink></li>
                               <li><NavLink to="/sales/"className="navlink">MicroGate® Serial API for Windows</NavLink></li>
                                <li><NavLink to="/sales/"className="navlink">MicroGate® Serial API for Linux</NavLink></li>
                            </ul>
                        </Col>
                        <Col className="col-md-4 col-sm-12 col-12">
                        <br />
                        <h4>Contact Us</h4> <br />
                        13284 Pond Springs Road, #102<br />
                        Austin, TX 78729<br />
                        USA<br /><br />
                        Toll Free (in US): 800.444.1982<br />
                        Direct/Int'l: +1.512.345.7791<br /><br />
                        
                        <lb>Email:</lb> info@microgate.com <br />
                        Web: microgate.com
                        </Col>
                        <Col className="col-md-4 col-sm-12 col-12">
                        <br />
                        <h4>About Us</h4><br />
                            Established in 1982, MicroGate is an Austin, Texas based company that designs, manufactures and markets a complete line of specialized communications solutions for PC workstations, servers, laptops and embedded environments.
                            <br /><br />
                            Designed in the USA.
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="col-md-6 col-sm-12 col-12">
                            <p>&copy;{new Date().getFullYear} MicroGate Systems, Ltd. All Rights Reserved</p>
                        </Col>
                        <Col className="col-md-6 col-sm-12 col-12">
                             <Nav className="ml-auto float-right">
                             <NavLink to="/sales/"className="navlink"><bot>Contacts</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp;
                             <NavLink to="/sales/"className="navlink"><bot>Terms</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp; 
                             <NavLink to="/sales/"className="navlink"><bot>Privacy</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp; 
                             <NavLink to="/sales/"className="navlink"><bot>FAQ</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp;
                             <NavLink to="/sales/"className="navlink"><bot>Trademarks</bot></NavLink>
                             </Nav>
                        </Col>
                    </Row>
                    </Layout>
            </Container>
        </Styles>
    </React.Fragment>
)