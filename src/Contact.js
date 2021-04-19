import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import image1  from './assets/MGLocationMap.jpg';

const Styles = styled.div`
h1 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

h2 {
    color: #72192d;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

h4 {
    color: #72192d;
    font-size: 1.5rem;
    font-weight: 600;
}

h5 {
    font-size: 1.25rem;
}

.ulFormat {
    padding-top: 10px;
    padding-bottom: 15px;
}

.toggleLink {
    color: #72192d;
    text-decoration: none;
    &:hover {
        color: black;
        font-weight: 500;
    }
}

.subhead {
    color: black;
    font-size: 1.15rem;
    font-weight: 700;
    padding-bottom: 10px;
}

.subhead2 {
    color: dark grey;
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 10px;
}

hr {
    padding: 0;
}

.subNote2 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 5px;
}

.displayImage{
    max-width: 100%; 
   }

a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.text-link {
    font-weight: 500;
}

.breadcrumb {
    background-color: rgba(211,211,211, 0);
}
`;

const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

function Contact() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contacting Us</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Contacting Us</h1>
            <hr />
            <h5>Find us on the map</h5>
            <Image src={image1} rounded className="mb-3 mt-3 ml-3 shadow p-2 mb-4 bg-white rounded displayImage" /> <br /><br />
            <h5>Contact Info:</h5><br />
            <Container>
                <Row>
                    <Col xs="12" lg="4">
                    <div className="subhead2">E-Mail:</div>
                    <Mailto email="info@microgate.com" subject="" body="">info@microgate.com</Mailto><br /><br />
                    </Col>
                    <Col xs="12" lg="4">
                    <div className="subhead2">United States Sales:</div>
                    <a href="tel:512-345-7791">512.345.7791</a> <br /><br />
                    </Col>
                    <Col xs="12" lg="4">
                    <div className="subhead2">Physical Address:</div>
                    MicroGate Systems, Ltd<br />
                    13284 Pond Springs Road, #102<br />
                    Austin, Texas 78729<br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg="4">
                    <div className="subhead2">Web:</div>
                    microgate.com <br /><br />
                    </Col>
                    <Col  xs="12" lg="4">
                    <div className="subhead2">International Sales:</div>
                    <a href="tel:512-345-7791">+1.512.345.7791</a> <br /><br />
                    </Col>
                    <Col  xs="12" lg="4">
                    <div className="subhead2">Remittance/Mailing Address:</div>
                    MicroGate Systems, Ltd<br />
                    PO Box 203306<br />
                    Austin, Texas 78720<br />
                    </Col>
                </Row>
            </Container>
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default Contact;