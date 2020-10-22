import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/USB.jpg';
import image2 from './assets/USB1back.jpg';
import image3 from './assets/SLUSBPCB1.jpg';
import NavigationBar from './components/NavigationBar';

const Styles = styled.div`
h1 {
    font-size: 2rem;
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

ul {
    padding-top: 10px;
}

.toggleLink {
    color: #72192d;
    text-decoration: none;
    &:hover {
        color: black;
        font-weight: 500;
    }
}
`;

function USBAdapter() {
    return (
        <React.Fragment>
        <Styles>
            <h1>SyncLink® Hardware</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                    <Col>
                    <br /><h4>SyncLink® USB Adapter</h4> <br /> <h5>The Ultimate Solution.</h5><br />
                    The SyncLink USB adapter is the ultimate go-anywhere synchronous serial communications solution. Supporting a full-duplex 10Mbps connection, the SyncLink USB is perfect for field operations requiring satellite and RF radio communications or connecting to specialized synchronous/asynchronous devices. It does not matter what type of system slots are available when using the SyncLink USB, simply connect the SyncLink USB to any free USB port or attached hub.
                    </Col>
                </Row>
                <br />
                <Row>
                <Col>
                Users can tackle any project with confidence using a laptop, desktop computer, server, ruggedized portable or industrial controller to directly connect to serial devices using any one of the SyncLink's supported RS-232, V.35, RS-422(485/530/530A) interfaces. Three LED lights indicate with precision various connection and interface states, as well as, transmit/receive activity and diagnostic information.
                <br /><br />
                The SyncLink USB utilizes the industry proven MicroGate FPGA Serial Controller. Beyond providing seamless integration between the hardware and software drivers, MicroGate is able to offer customized serial controller interfaces for users needing additional control over the serial links. There is no need for custom hardware but rather quick modifications to the FPGA programming.
                <br /><br />
                Customers may also purchase the SyncLink USB PCB on its own, with any combination of DB25 and USB connectors or LEDs installed or left unpopulated. Using the four mounting holes on the SyncLink USB PCB, solution providers can further customize the adapter to fit their particular packaging and operating requirements. Contact MicroGate for further details.
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
                                Other features include:<br />
                                <ul>
                                    <li>Supports 10Mbps synchronous, 8Mbps asynchronous connections</li>
                                    <li>SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNC, RAW bit-synchronous protocols</li>
                                    <li>USB 2.0 hi‐speed (480Mbps), compatible with USB 2.0 and USB 3.0 ports</li>
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
                                    <li>Optional rails for use when permanent mounting required.</li>
                                </ul>

                                    Always Up-To-Date.
                                    Free downloadable system drivers gives the user access to the latest features and upgrades avaiable from MicroGate.

                                    Powerful API Engine.
                                    Supporting both 32-bit and 64-bit versions of Windows and Linux (x86), the MicroGate Serial API gives developers direct access to the SyncLink adapter and serial link for total control of HDLC/SDLC, BISYNC, MONOSYNC, ISOSYNCHRONOUS, ASYNC and RAW synchronous bit streams. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications.

                                    LINUX VERSION COMPATIBILITY

                                    The release of the Linux drivers for use with SyncLink USB Adapters targets Red Hat Enterprise Linux/CentOS 6.x and 7.x. SyncLink USB is not supported on kernel versions before 2.6.28

                                    Many different Linux distributions and kernel versions are available to users. MicroGate urges developers build and install the freely downloadable MicroGate drivers in the target environment to verify compatibility. Should you encounter an incompatibility, contact MicroGate and we may be able to offer help porting to the target environment.

                                    Visit the "Related Products" and "Part Numbers" tabs for more details on the complete line of SyncLink hardware and MicroGate software solutions.
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
                                    SyncLink USB Adapter Specifications
                                    A variety of serial protocols and interface standards are supported. Refer to the software documentation included with the card for details on using the adapter for a specific application.
                                    SyncLink USB
                                    MicroGate FPGA serial controller (one port)
                                    USB 2.0 hi‐speed (480Mbps), compatible with USB 2.0 and USB 3.0 ports
                                    USB Type B Receptacle to DB25 Male
                                    Environmental: Temperature ‐40C to +85C; humidity 0 to 95% non‐condensing; alt. ‐ 200 to +10,000 ft
                                    Mechanical: 3.6” length, 2.6” width, 1.9” height
                                    Power usage: Bus Powered, 5V, 500mA max (300mA typical)
                                    Regulatory: FCC Class A, CE, ANSI C63.4, EN55022 Class A, EN55024, RoHS
                                    Connector: DB‐25 (male)
                                    Cable Options: DB‐25 (female) to DB‐25 (male); DB‐25 (female) to 34‐pin V.35 (male); DB‐25(female) to 37‐pin RS‐449 (male); DB‐25 (female) to 15‐pin X.21 (male)
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

export default USBAdapter;