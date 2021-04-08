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
        text-decoration: none;
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
    padding: 1em;
    padding-top: 0em;
    padding-left: 0;
}

ul {
    list-style: none;
    padding-left: 0;
    list-style-position: inside;
    padding-bottom: 0;
    padding: 0;
    list-style-type: none;
}

p {
    white-space: nowrap;
}

.navlink {
    color: #72192d;
    font-weight: 500;
    &:hover{
        text-decoration: none;
    }
}

a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}
`;

const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

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
                            <li><NavLink to="/USBAdapter/"className="navlink">SyncLink® USB</NavLink></li>
                            <li><NavLink to="/PCIeAdapter/"className="navlink">SyncLink® PCIe</NavLink></li>
                            <li><NavLink to="/GT4e/"className="navlink">SyncLink® GT4e</NavLink></li>
                            <li><NavLink to="/apiwin/"className="navlink">MicroGate® Serial API for Windows</NavLink></li>
                            <li><NavLink to="/apilin/"className="navlink">MicroGate® Serial API for Linux</NavLink></li>
                        </ul>
                        </Col>
                        <Col className="col-md-4 col-sm-12 col-12">
                        <br />
                        <h4>Contact Us</h4> <br />
                        13284 Pond Springs Road, #102<br />
                        Austin, TX 78729<br />
                        USA<br /><br />

                        Sales: <Mailto email="sales@microgate.com" subject="" body="">sales@microgate.com</Mailto><br />
                        Support: <Mailto email="support@microgate.com" subject="" body="">support@microgate.com</Mailto><br />
                        Web: <a href="/">microgate.com</a><br /><br />
                        
                        Telephone Orders: <a href="tel:512-345-7791">+1.512.345.7791</a><br />
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
                             <NavLink to="/Contact/"className="navlink"><bot>Contacts</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp;
                             <NavLink to="/termsofuse/"className="navlink"><bot>Terms</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp; 
                             <NavLink to="/privacy/"className="navlink"><bot>Privacy</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp; 
                             <NavLink to="/faq/"className="navlink"><bot>FAQ</bot></NavLink>&nbsp;&nbsp;  <bot>|</bot>  &nbsp;&nbsp;
                             <NavLink to="/trademarks/"className="navlink"><bot>Trademarks</bot></NavLink>
                             </Nav>
                        </Col>
                    </Row>
                    </Layout>
            </Container>
        </Styles>
    </React.Fragment>
)