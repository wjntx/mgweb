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
    font-weight: 600;
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

function oem() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Developer/OEM Support</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <br /><h5>Direct Support From MicroGate Hardware And Software Engineers.</h5><br />
                    MicroGate offers developers a unique support structure not found with other suppliers – support direct from the manufacturer. Support that is unsurpassed in the industry. Developers and OEMs are able to leverage the decades of technical design and software support found behind the SyncLink products ensuring their applications and solutions are delivered on-time and without interruption.
                    <br /><br />
                    <div className="subhead">Top reasons developers choose MicroGate as their platform for specialized communications include:</div>
                        <ul className="ulFormat">
                            <li>Fast delivery means your purchase or scheduled delivery will be delivered correct and on-time. By dealing direct with MicroGate, it is simple to order an individual adapter or quantity purchase. MicroGate products are in stock and ready for immediate delivery, allowing you to concentrate on servicing your customer.</li>
                            <li>Quality components and designs result in years of flawless performance from every solution we manufacture.</li>
                            <li>Technical support that provides prompt answers to your questions. From system configuration questions to detailed application programming and driver development questions, the Customer Service Team is here to help.</li>
                            <li>A customer centered organization provides the guidance and service that can only be delivered by professionals who understand your requirements and are empowered to ensure your MicroGate experience exceeds expectations.</li>
                            <li> A heritage of excellence and after the sale support that dates to our original founding in 1982 gives you the confidence of dealing with an industry pioneer that has stood the test of time.</li>
                            <li>MicroGate supports developers and OEMs with seamless Windows and Windows Server application integration. With individually assigned PCI, PCIe, PC/104+ and USB hardware IDs, the SyncLink adapters may be recognized and installed as distinctive cards, carrying your own company name or model classification. This unique program is one more way developers may leverage MicroGate’s factory-direct support and provide solutions with greater value.</li>
                            <li>MicroGate offers software and hardware engineering services for modifications to existing designs, where customers have specific applications, and complete turnkey engineering and manufacturing solutions.</li>
                        </ul>
                    
                    Each customer presents MicroGate with unique challenges and demands. MicroGate’s SyncLink line of adapters, software solutions, and development kits exceed the rigorous demands our customers expect from their communications solutions, providing the connectivity support required.
                    <br /><br />
                    Take a moment to look at the various products and services MicroGate offers and contact us with any questions at +1.512.345.7791 or info@microgate.com.
                    <br /><br />
                    MicroGate offers aggressive discounts for volume purchases. Contact MicroGate for details.
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

export default oem;