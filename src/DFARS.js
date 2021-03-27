import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/pc104-small-rohs.jpg';

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
    height:270px;
    width:300px;
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
`;

function DFARS() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>DFARS</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <br /><h5>Defense Federal Acquisition Regulation Supplement</h5><br />
                    The Defense Federal Acquisition Regulation Supplement (DFARS) is a set of U.S. government policies and procedures used by the Department of Defense (DoD) in the procurement of goods and services. DFARS is also known as the Buy American Act.
                    <br /><br />
                    The complete line of SyncLink single and multiport PCI, PCI-Express and PC/104+ adapters, as well as the SyncLink USB, are compliant with DFARS Clause 252.225-7014, Preference for Domestic Specialty Metals, Alt 1, as prescribed in 225.7002-3(b)(1).
                    <br /><br />
                    Contact MicroGate by telephone or email with any questions regarding the SyncLink line of communications products.
                    </Col>
                    <Col>
                        <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                </Row>
            </Container>
            <br /><br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default DFARS;