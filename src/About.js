import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/AustinDT.jpg';

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
`;

function About() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>About Us</h1>
            <hr />
            <Image src={image1} rounded className="float-right mb-3 mt-3 ml-3 shadow p-2 mb-4 bg-white rounded displayImage" /> <br />
            <h5>Invaluable Experience.</h5><br />
            Established in 1982, MicroGate is an Austin, Texas based company that designs, manufactures and markets a complete line of specialized communications solutions for PC workstations, servers, laptops and embedded environments. MicroGate's SyncLink line includes USB, multiport PCI adapters, and PCI Express cards for WAN, HDLC / SDLC, and other asynchronous / synchronous protocols. MicroGate’s Serial API development kit supports all these adapters directly.
            <br /><br />
            SyncLink adapters are hard at work in customer solutions ranging from point-of-sale systems to ATM machines, mission critical satellite communications, military, custom industrial applications and public emergency services. MicroGate is a leader in providing SDLC connectivity with legacy systems where Microsoft’s Host Integration Server, IBM’s Communications Server and PCOMM products are needed. Many customers deploy embedded solutions using the SyncLink adapters and development kits where unique HDLC, SDLC, MONOSYNC, ISOCHRONOUS or RAW bit-synchronous bit stream communications are required. Many such connections are used for satellite or RF communications, video and radar.
            <br /><br />
            MicroGate’s goal is to satisfy our clients by helping them rapidly gain competitive advantage through proven solutions. We consider all process technologies as potential options, and together with you, select the best choice for your requirements.
            <br /><br />
            Each customer presents MicroGate with unique challenges and demands. MicroGate’s SyncLink line of adapters, software solutions and development kits exceed the rigorous demands our customers expect from their communications solutions, providing the connectivity support required.
            <br /><br />
            Take a moment to look at the different solutions MicroGate offers. Download any of the compete development kits, which include documentation and sample source code, and discover why so many customers benefit from dealing directly with the premier designer and manufacturer of synchronous communications solutions and why these customers return to MicroGate again when planning new projects.
            <br /><br />
            If at any time you have a question about a product MicroGate manufactures or require design consultation, please contact us at 800.444.1982 / +1.512.345.7791 or by email at sales@microgate.com. We are eager to talk with you about your current communications needs.
            <br /><br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default About;