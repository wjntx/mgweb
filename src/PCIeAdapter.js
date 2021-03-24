import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import image1  from './assets/SLPCIe.jpg';
import image2  from './assets/SLPCIeDB25Cables.jpg';
import image3  from './assets/SLPCIePorts.jpg';

import USBDriverLinux from './Drivers/linuxwan.tar.xz';
import SerialAPIWindows from './Drivers/hdlcsdk.exe';

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
    font-size: 1.5rem;
    font-weight: 600;
}

h5 {
    font-size: 1.25rem;
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

   a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.displayImage3{
    height:236px;
    width:315px;
   }

   a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.displayImage4{
    height:375px;
    width:300px;
   }

   a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.subNote2 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 5px;
}
`;

function PCIeAdapter() {
    window.scrollTo(0,0);
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
                                    <div className="subhead2">SyncLink PCIe Adapter Specifications</div>
                                    A variety of serial protocols and interface standards are supported. Refer to the software documentation included with the card for details on using the card for a specific application.
                                    <br /><br />
                                    <h3>SyncLink PCIe Adapter</h3>
                                    <ul>
                                        <li>MicroGate FPGA serial controller (2 ports)</li>
                                        <li>Environmental: Temperature ‐40C to +85C; humidity 0 to 95% non‐condensing; alt. ‐ 200 to +10,000 ft</li>
                                        <li>Mechanical: Standard PCI Express short card; length 3.8", height 4.0, Weight 3Oz</li>
                                        <li>Power usage:2.5W</li>
                                        <li>Regulatory: FCC Class B, CE, ANSI C63.4, EN55022 Class B, EN55024, RoHS</li>
                                        <li>Connector: DB‐25 (male)</li>
                                        <li>Cable Options: DB‐25 (female) to DB‐25 (male); DB‐25 (female) to 34‐pin V.35 (male); DB‐25(female) to 37‐pin RS‐449 (male); DB‐25 (female) to 15‐pin X.21 (male)</li>
                                        </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="2">
                                    Part Numbers <i className="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <div className="subhead2">Product and Ordering Information</div>
                                    Use the part numbers below for ordering SyncLink hardware and MicroGate software.<br />
                                    Additional product information can be found following the available links below.<br />
                                    <br /><br />
                                    <Container>
                                    <h2>SyncLink PCIe Adapter</h2>
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
                                            SyncLink PCIe Adapter/PCIe/2-port RS-232, V.35, RS422(485/530/530A)<br />
                                            </Col>
                                            <Col>
                                            2E0170
                                            </Col>
                                            <hr />
                                        </Row>
                                        <br /><br />
                                        <h2>MicroGate Software Development Kits</h2>
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
                                            <div className="subNote2">Windows (32-bit/64-bit)</div>
                                            MicroGate Serial API for Windows w/ SyncLink USB Adapter<br /><br />
                                            </Col>
                                            <Col>
                                            <br />
                                            <div className="subNote2"> 
                                            <a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>DOWNLOAD</a></div>
                                            </Col>
                                            <hr />
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div className="subNote2">Linux (32-bit/64-bit)</div>
                                            MicroGate Serial API for Linux w/ SyncLink USB Adapter<br /><br />
                                            </Col>
                                            <Col>
                                            <br />
                                            <div className="subNote2"> 
                                            <a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>DOWNLOAD</a></div>
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
                                            X.21 Cable (DB25F-DB15M) 6-feet<br /><br />
                                            </Col>
                                            <Col>
                                            2515FM
                                            </Col>
                                            <hr />
                                        </Row>
                                    </Container>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="3">
                                    Product Photos <i className="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                            <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                                            </Col>
                                            <Col>
                                            <div align="center"><Image src={image2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage3" /></div> <br />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div align="center"><Image src={image3} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage4" /></div> <br />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="4">
                                    <div align="left" >Related Products <i className="fas fa-caret-down"></i></div>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <Container>
                                            <Row>
                                                <Col>
                                                    <div className="subhead2"><NavLink to="/USBAdapter/">SyncLink USB</NavLink></div>
                                                    High-speed USB adapter using the proven MicroGate FPGA serial controller found on every SyncLink serial card. Supports RS-232, V.35 and RS-422 (485/530/530A) connections from a single device.
                                                    <br /><hr />
                                                    <div className="subhead2"><NavLink to="/GT4e/">SyncLink GT4e</NavLink></div>
                                                    4-port Modern PCI Express (PCIe) design supporting RS-232, V.35, RS422(485/530) connections and the latest servers available on the market today.
                                                    <br /><hr />
                                                    <div className="subhead2"><NavLink to="/apiwin/">MicroGate Serial API for Windows (Download FREE)</NavLink></div>
                                                    Serial Communications Software Development Kit for Windows (SDLC,HDLC,RAW,BISYNC,ISOSYNCHRONOUS,MONOSYNC,ASYNC) Download the complete SDK for FREE at any time.
                                                    <br /><hr />
                                                    <div className="subhead2"><NavLink to="/apilin/">MicroGate Serial API for Linux (Download FREE)</NavLink></div>
                                                    Serial Communications Software Development Kit for Linux (SDLC,HDLC,RAW,BISYNC,ISOSYNCHRONOUS,MONOSYNC,ASYNC) Download the complete SDK for FREE at any time.
                                                    <br /><hr />
                                                </Col>
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