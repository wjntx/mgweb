import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

import { Rs232table } from './components/Rs232table.js';
import { V35table } from './components/V35table.js';
import { Rs422table } from './components/Rs422table.js';
import { X21table } from './components/X21table.js';

import image1  from './assets/RS-232.jpg';
import image2  from './assets/v35.jpg';
import image3 from './assets/rs232.jpg';
import image4 from './assets/rs449.jpg';
import image5 from './assets/x21.jpg';

const Styles = styled.div`
h1 {
    font-size: 2rem;
}

h3 {
    color: #72192d;
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
    font-size: 2rem;
    font-weight: 600;
    white-space: nowrap;
}

h5 {
    font-size: 1.5rem;
    white-space: nowrap;
    font-style: italic;
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

.subNote {
    font-weight: 300;
    font-size: .85rem;
    font-style: italic;
}
`;

function Serialpinouts() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Serial Interface/Cable Pinouts</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <br /><br />
                    <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                    <Col>
                    <br />
                        <h5>RS-232</h5><br />
                        The RS-232 standard uses single ended signals on a DB-25 connector. The adapter DB-25 connector follows this standard when the port jumpers are installed for RS-232. Use any straight through 25 conductor DB-25M to DB-25F cable (such as MicroGate Part # CMF000) to connect the adapter connector to the communications equipment. The maximum data rate supported by the adapter when using RS-232 is 128Kbps. Cable length and signal loading may reduce the maximum usable data rate from this value.
                        <br /><br /><br />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <Rs232table />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <br /><br />
                    <div align="center"><Image src={image2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                    <Col>
                    <br />
                        <h5>V.35</h5><br />
                        The V.35 standard uses a mix of single ended and differential signals on a 34 pin block connector. To use this standard, install the V.35 jumpers on the port and use the MicroGate V.35 cable (Part # 2534GT, picture shown below). Note that the LL, RL, and RI signals are available on the adapter’s DB-25 connector when the V.35 jumpers are installed, but are not available (NC = no connect) on the 34 pin block connector when using the V.35 cable. The maximum data rate supported by the adapter when using V.35 is 10Mbps. Cable length and signal loading may reduce the maximum usable data rate from this value.
                        <br /><br /><br />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <V35table />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <br /><br />
                    <div align="center"><Image src={image3} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    <div align="center"><Image src={image4} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                    <Col>
                    <br />
                        <h5>RS­422/RS­449/RS­485/RS­530</h5><br />
                        The RS‐422 and RS‐485 standards describe differential electrical signals but not connector or pin assignments. The RS‐530 and RS‐449 standards define specific connectors and pin assignments using differential signals. The differential signals on the card meet both RS‐422 and RS‐485 electrical specifications.
                        <br /><br />
                        RS‐530 uses differential signals on a DB‐25 connector. The adapter DB‐25 connector follows this standard when the port jumpers are installed for RS‐422/485. Use any straight through 25 conductor DB‐25M to DB‐25F cable (such as MicroGate Part # CMF000) to connect the adapter to RS‐530 communications equipment.
                        <br /><br />
                        RS‐449 uses differential signals on a DB‐37 connector. To use this standard install the RS‐422/485 jumpers for the port and use the MicroGate RS‐449 cable (Part # 2537FM).
                        <br /><br />
                        The maximum data rate supported by the adapter when using RS‐530 or RS‐449 is 10Mbps. Cable length and signal loading may reduce the maximum usable data rate from this value.
                        <br /><br /><br />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <Rs422table />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <br /><br />
                    <div align="center"><Image src={image5} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                    <Col>
                    <br />
                        <h5>X.21</h5><br />
                        X.21 is an interface standard using differential signals on a DB‐15 connector. To use this standard, install the RS‐422/485 jumpers on a port and use the MicroGate X.21 cable (Part # 2515FM).
                        <br /><br />
                        The X.21 signal names are different than those used by the adapter and other interface standards. The mapping of the X.21 signals to the adapter signals are shown in the table below.
                        <br /><br />
                        The maximum data rate supported by the adapter when using X.21 is 10Mbps. Cable length and signal loading may reduce the maximum usable data rate from this value.
                        <br /><br /><br />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <X21table />
                    </Col>
                </Row>
            </Container>
        </Styles>
        </React.Fragment>
    );
}

export default Serialpinouts;