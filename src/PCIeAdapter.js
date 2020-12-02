import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/PCIeAdapter.jpg';

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

.displayImage{
    height:270px;
    width:300px;
   }
`;

function PCIeAdapter() {
    return (
        <React.Fragment>
        <Styles>
            <h1>SyncLink® Hardware</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                    </Col>
                    <Col>
                    <br /><h4>SyncLink® PCIe Adapter</h4> <br /> <h5>The Newest PCIe Adapter.</h5><br />
                    The SyncLink PCIe Adapter features bus master control for sustained 10Mbps synchronous communications simultaneously on both ports. The SyncLink PCIe Adapter also supports asynchronous connections up to 8Mbps. The 1x bus connector supports the latest workstation, stand-a-lone server, rack mount server or ruggedize system requiring synchronous or asynchronous connections. The number of adapters one can place in a single system is only limited by the number of slots available in the computer.
                    </Col>
                </Row>
                <br />
                <Row>
                <Col>
                The SyncLink family of synchronous adapters utilizes the MicroGate FPGA Serial Controller. Beyond providing seamless integration between the hardware and software drivers, MicroGate is able to offer customized serial controller interfaces for users needing additional control over the serial links. There is no need for custom hardware but rather quick modifications to the FPGA programming.
                <br /><br />
                </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} className="toggleLink" variant="link" eventKey="0">
                                    Overview <div class="fas fa-caret-down"></div>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <b>Other features include:</b><br />
                                <ul className="ulFormat">
                                    <li>Two Ports - individually configurable. Selectable by software or hardware switches.</li>
                                    <li>Supports 10Mbps synchronous, 8Mbps asynchronous connections</li>
                                    <li>SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNC, RAW bit-synchronous protocols</li>
                                    <li>Selectable hardware CRC: CRC-16, CRC-32, None</li>
                                    <li>DPLL clock recovery (x8 and x16 sampling)</li>
                                    <li>Separate, selectable transmit and receive data clock inputs</li>
                                    <li>Baud Rate Generator for sourcing data clocks</li>
                                    <li>Variety of transmit preamble and idle patterns</li>
                                    <li>Encoding: NRZ,NRZB,NRZ-L,NRZI,NRZ-M,NRZ-S,BIPHASE,FM0,FM1,Manchester,differential biphase level</li>
                                    <li>Full control and monitoring of DTR,RTS,DSR,DCD,CTS,RI</li>
                                    <li>Selectable interface for RS‐232, V.35, RS‐422/485, RS‐530, RS‐530A, RS‐449, X.21</li>
                                    <li>Time Division Multiplexing (TDM) compatible with TDM mode of McASP</li>
                                    <li>General Purpose I/O (GPIO) signal access</li>
                                    <li>Loopback mode for diagnostics</li>
                                </ul>

                                    <div className="subhead">Always Up-To-Date.</div>
                                    Free downloadable system drivers gives the user access to the latest features and upgrades avaiable from MicroGate.
                                    <br /><br />
                                    <div className="subhead">Full-Featured Software Development Kit.</div>
                                    Supporting both 32-bit and 64-bit versions of Windows and Linux (x86), the MicroGate Serial API gives developers direct access to the SyncLink adapter and serial link for total control of HDLC/SDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNC and RAW synchronous bit streams. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications.
                                    <br /><br />
                                    <div className="subhead">Additional Support.</div>
                                    The SyncLink drivers are part of the base Linux kernel, providing direct support with Linux networking options.
                                    <br /><br />
                                    Visit the "Related Products" and "Part Numbers" tabs for more details on the complete line of SyncLink hardware and MicroGate software solutions.
                                    <br /><br />
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="1">
                                    Technical Details <i class="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div className="subhead2">SyncLink USB Adapter Specifications</div>
                                    A variety of serial protocols and interface standards are supported. Refer to the software documentation included with the card for details on using the adapter for a specific application.
                                    <br /><br />
                                    <h3>SyncLink USB</h3>
                                    <ul>
                                        <li>MicroGate FPGA serial controller (one port)</li>
                                        <li>USB 2.0 hi‐speed (480Mbps), compatible with USB 2.0 and USB 3.0 ports</li>
                                        <li>USB Type B Receptacle to DB25 Male</li>
                                        <li>Environmental: Temperature ‐40C to +85C; humidity 0 to 95% non‐condensing; alt. ‐ 200 to +10,000 ft</li>
                                        <li>Mechanical: 3.6” length, 2.6” width, 1.9” height</li>
                                        <li>Power usage: Bus Powered, 5V, 500mA max (300mA typical)</li>
                                        <li>Regulatory: FCC Class A, CE, ANSI C63.4, EN55022 Class A, EN55024, RoHS</li>
                                        <li>Connector: DB‐25 (male)</li>
                                        <li>Cable Options: DB‐25 (female) to DB‐25 (male); DB‐25 (female) to 34‐pin V.35 (male); DB‐25(female) to 37‐pin RS‐449 (male); DB‐25 (female) to 15‐pin X.21 (male)</li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="2">
                                    Part Numbers <i class="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <div className="subhead2">Product and Ordering Information</div>
                                    Use the part numbers below for ordering SyncLink hardware and MicroGate software.<br />
                                    Additional product information can be found following the available links below.<br />
                                    <br /><br />
                                    <Container>
                                    <h2>SyncLink USB Adapter</h2>
                                    <hr />
                                        <Row>
                                            <Col>
                                                <b>Product Description</b>
                                            </Col>
                                            <Col>
                                                <b>Part Number</b>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            SyncLink USB Adapter RS-232, V.35, RS422(485/530/530A)<br />
                                            <div className="subNote">NOTE: Use this part number when ordering additional adapters for use with an existing application.</div>
                                            </Col>
                                            <Col>
                                            1U3170
                                            </Col>
                                            <hr />
                                        </Row>
                                        <br /><br />
                                        <h2>Microgate Software Development Kits</h2>
                                        <hr />
                                        <Row>
                                            <Col>
                                                <b>Product Description</b>
                                            </Col>
                                            <Col>
                                                <b>Part Number</b>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div className="subNote">Windows (32-bit/64-bit)</div>
                                            MicroGate Serial API for Windows w/ SyncLink USB Adapter<br /><br />
                                            </Col>
                                            <Col>
                                            1U3173
                                            </Col>
                                            <hr />
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div className="subNote">Linux (32-bit/64-bit)</div>
                                            MicroGate Serial API for Linux w/ SyncLink USB Adapter<br /><br />
                                            </Col>
                                            <Col>
                                            1U3193
                                            </Col>
                                            <hr />
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div className="subNote">Linux (32-bit/64-bit)</div>
                                            SyncLink USB WAN Adapter for Linux RS-232, V.35, RS422(485/530/530A)<br /><br />
                                            </Col>
                                            <Col>
                                            1U3193
                                            </Col>
                                            <hr />
                                        </Row>
                                        <br /><br />
                                        <h2>Cables and Options</h2>
                                        <hr />
                                        <Row>
                                            <Col>
                                                <b>Product Description</b>
                                            </Col>
                                            <Col>
                                                <b>Part Number</b>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            Synchronous RS-232 Cable (DB25F-DB25M) 6-feet<br /><br />
                                            </Col>
                                            <Col>
                                            CMF000
                                            </Col>
                                            <hr />
                                        </Row>
                                        <Row>
                                            <Col>
                                            V.35 Cable (DB25F-34pin Block Connector) 6-feet<br /><br />
                                            </Col>
                                            <Col>
                                            2534GT
                                            </Col>
                                            <hr />
                                        </Row>
                                        <Row>
                                            <Col>
                                            RS-449 Cable (DB25F-DB37M) 6-feet<br /><br />
                                            </Col>
                                            <Col>
                                            2537FM
                                            </Col>
                                            <hr />
                                        </Row>
                                        <Row>
                                            <Col>
                                            RS-449 Cable (DB25F-DB37M) 6-feet<br /><br />
                                            </Col>
                                            <Col>
                                            2537FM
                                            </Col>
                                            <hr />
                                        </Row>
                                    </Container>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
                <br />
            </Container>
        </Styles>
        </React.Fragment>
    );
}

export default PCIeAdapter;