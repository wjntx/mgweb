import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/USB.jpg';
import image2  from './assets/USB1back.jpg';
import image3  from './assets/SLUSBPCB1.jpg';
import image4  from './assets/USBRails.jpg';
import image5  from './assets/rs232.jpg';
import image6  from './assets/v35.jpg';
import image7  from './assets/rs449.jpg';
import image8  from './assets/x21.jpg';
import image9 from './assets/gt4cables1.jpg'

import usermanual from './PDF/slusb-users-manual.pdf';
import drawing from './PDF/SLUSBPCB.pdf';
import USBDriverWindows from './Drivers/hdlcrtk.exe';
import USBDriverLinux from './Drivers/linuxwan.tar.xz';
import SerialAPIWindows from './Drivers/hdlcsdk.exe';
import serialapiwindows from './PDF/serial-api-windows.pdf';

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
    font-weight: 500;
    &:hover{
        text-decoration: none;
    }
}
`;

function apiwin() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>MicroGate® Serial API</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                        <div align="center"><Image src={image2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                        <div align="center"><Image src={image9} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                    <Col>
                    <br /><h4>MicroGate® Serial API for Windows</h4> <br /> <h5>Full-Featured Software Development Kit for Windows.</h5><br />
                    The MicroGate Serial API provides a serial communications Application Program Interface for Microsoft Windows using the SyncLink family of adapters (USB, PCI, PCI Express, PC/104+). The API supports multiple serial protocols including SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNCHRONOUS and RAW bit-synchronous. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications. The API allows direct control of the serial hardware. <br /><br />
                    The MicroGate Serial API is FREE and may be <a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>downloaded</a> at any time from the MicroGate website. <br/><br/>
                    Download the Guide to MicroGate Serial Communications for Windows for complete details regarding the use of SyncLink hardware, driver and software-development-kit options, and Windows.<br/><br/>      
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} className="toggleLink" variant="link" eventKey="0">
                                    Overview <div className="fas fa-caret-down"></div>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <div className="subhead">Supported Windows Versions</div>
                                <ul className="ulFormat">
                                    <li>Windows XP (Server 2003/2003R2)</li>
                                    <li>Windows Vista (Server 2008)</li>
                                    <li>Windows 7 (Server 2008R2)</li>
                                    <li>Windows 8 (Server 2012)</li>
                                    <li>Windows 8.1 (Server 2012R2)</li>
                                    <li>Windows 10 (Server 2016/2019)</li>
                                </ul>
                                
                                The API is accessed through a standard Windows DLL, and can be used by any programming language that allows calling functions in a standard Windows DLL. Sample programs with source are supplied for the C/C++, C# and Python 3 languages.
                                <br /><br />

                                <div className="subhead">Supported Development Tools</div>
                                The MicroGate Serial API for Windows is supported by Microsoft Visual Studio, with sample projects included.
                                <br /><br />
                                An application uses the base API to send and receive data where the application controls the exact contents and timing of data transfer.
                                <br /><br />
                                An application uses the extended API to send and receive data where the API implements the details of a higher level protocol such as LAPB. The extended API handles frame sequencing, retries, and timeouts. A sample C application is included demonstrating LAPB communications.
                                <br /><br />

                                <div className="subhead2">Hardware Supported</div>
                                The MicroGate Serial API supports all the SyncLink hardware MicroGate manufactures. Once you develop an application using the SDK, you can be confident any platform your users require will have a ready-to-go solution.
                                <br /><br />
                                
                                <div className="subhead">Base API Options</div>
                                <ul className="ulFormat">
                                    <li>SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNC, RAW bit-synchronous protocols</li>
                                    <li>Selectable hardware CRC: CRC-16, CRC-32, None</li>
                                    <li>DPLL clock recovery</li>
                                    <li>Separate, selectable transmit and receive data clock inputs</li>
                                    <li>Baud Rate Generator for sourcing data clocks</li>
                                    <li>Variety of transmit preamble and idle patterns</li>
                                    <li>Encoding: NRZ,NRZB,NRZ-L,NRZI,NRZ-M,NRZ-S,BIPHASE,FM0,FM1,Manchester,differential biphase level</li>
                                    <li>Time Division Multiplexing (TDM) compatible with TDM mode of McASP</li>
                                    <li>Full control and monitoring of DTR,RTS,DSR,DCD,CTS,RI</li>
                                    <li>Loopback mode for diagnostics</li>
                                </ul>
                                The MicroGate Serial API is packaged as a Software Development Kit (SDK) and a Run Time Kit (RTK).<br/><br/>

                                <div className="subhead2">Software Development Kit</div>
                                The MicroGate Serial SDK contains documentation, development support files, sample C/C++, C# and Python 3 applications, and the Run Time Kit.
                                <br /><br />

                                <div className="subhead2">Run Time Kit</div>
                                The MicroGate Serial RTK contains the redistributable software components necessary to support deployment of a serial application.
                                <br /><br />

                                <div className="subhead2">Optional General Purpose I/O Signals</div>
                                The SyncLink family of serial adapters can be ordered with an optional header that provides general purpose digital (TTL) input/output signals. These signals can be configured (direction), controlled, and monitored through the serial API. Contact our sales department for ordering details.
                                <br /><br />

                                <div className="subhead2">Hardware Branding</div>
                                The MicroGate Serial API SDK offers developers seamless application integration. With individually assigned PCI/PCIe/USB hardware IDs, the SyncLink adapters may be recognized and installed as distinctive cards, carrying your own company name or model classification.
                                <br /><br />

                                <div className="subhead2">Documentation</div>
                                <ul className="ulFormat">
                                    <li>Guide to MicroGate Serial Communications for Windows</li>
                                    <li>Guide to MicroGate Serial Communications Run-Time-Kit for Windows</li>
                                </ul>
                                <div className="subhead2">Serial API Downloads</div>
                                <ul className="ulFormat">
                                    <li>HDLCSDK.EXE</li>
                                    <li>HDLCRTK.EXE</li>
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="1">
                                    Technical Details <i className="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div className="subhead2">SyncLink USB Adapter Specifications</div>
                                    A variety of serial protocols and interface standards are supported. Refer to the software documentation included with the card for details on using the adapter for a specific application.
                                    <br /><br />
                                    <h3>SyncLink USB</h3>
                                    <hr />
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
                                    <div align="left" >Documentation and Software Downloads <i className="fas fa-caret-down"></i></div>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <Container>
                                            <Row>
                                                <Col>
                                                    <h3>Documentation</h3>
                                                    <hr />
                                                    Hardware Guides
                                                    <ul>
                                                        <li><a href={usermanual} target="_blank" rel="noopener noreferrer">SyncLink USB Hardware Guide</a></li>
                                                    </ul>
                                                    Serial Interface Information
                                                    <ul>
                                                        <li><NavLink to="/Serialpinouts/">Serial Interface/Cable Pinouts</NavLink></li>
                                                        <li><NavLink to="/NullModem/">Null Modem Details</NavLink></li>
                                                        <li><NavLink to="/Loopback/">Loopback Adapter Details</NavLink></li>
                                                    </ul>
                                                    Hardware Diagrams
                                                    <ul>
                                                        <li><a href={drawing} target="_blank" rel="noopener noreferrer">SyncLink USB PCB Drawing</a></li>
                                                    </ul>
                                                </Col>
                                                <Col>
                                                    <h3>Software Downloads</h3>
                                                    <hr />
                                                    Hardware Drivers
                                                    <ul>
                                                        <li><a href={USBDriverWindows} target='_blank' rel="noopener noreferrer" download>SyncLink USB Drivers for Windows</a></li>
                                                        <li><a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>SyncLink USB Drivers for Linux</a></li>
                                                    </ul>
                                                    Microgate Serial API
                                                    <ul>
                                                        <li><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>MicroGate Serial API for Windows</a></li>
                                                        <li><a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>MicroGate Serial API for Linux</a></li>
                                                    </ul>
                                                    Additional Software Solutions
                                                    <ul>
                                                        <li><a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>SyncLink WAN Adapter Software for Linux</a></li>
                                                        <li><NavLink to="/LegacyDrivers/">Legacy Drivers</NavLink></li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                    </Container>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="3">
                                    Part Numbers <i className="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
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
                                            </Col>
                                            <Col>
                                            1U3170
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
                                            <div className="subNote2"> </div>
                                            DOWNLOAD
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
                                            <div className="subNote2"> </div>
                                            DOWNLOAD
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
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="4">
                                    Product Photos <i className="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                            <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                            <Col>
                                            <div align="center"><Image src={image2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div align="center"><Image src={image3} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                                            </Col>
                                            <Col>
                                            <div align="center"><Image src={image4} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div align="center"><Image src={image5} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                            <Col>
                                            <div align="center"><Image src={image6} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div align="center"><Image src={image7} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                            <Col>
                                            <div align="center"><Image src={image8} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" className="toggleLink" eventKey="5">
                                    <div align="left" >Related Products <i className="fas fa-caret-down"></i></div>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <Container>
                                            <Row>
                                                <Col>
                                                    <div className="subhead2"><NavLink to="/PCIeAdapter/">SyncLink PCIe</NavLink></div>
                                                    2-port PCI Express (PCIe) adapter supporting RS-232, V.35 and RS-422 (485/530) connections, as well as, a wide range of synchronous/asynchronous protocols.
                                                    <br /><hr />
                                                    <div className="subhead2">SyncLink GT4e</div>
                                                    4-port Modern PCI Express (PCIe) design supporting RS-232, V.35, RS422(485/530) connections and the latest servers available on the market today.
                                                    <br /><hr />
                                                    <div className="subhead2">MicroGate Serial API for Windows (Download FREE)</div>
                                                    Serial Communications Software Development Kit for Windows (SDLC,HDLC,RAW,BISYNC,ISOSYNCHRONOUS,MONOSYNC,ASYNC) Download the complete SDK for FREE at any time.
                                                    <br /><hr />
                                                    <div className="subhead2">MicroGate Serial API for Linux (Download FREE)</div>
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

export default apiwin;