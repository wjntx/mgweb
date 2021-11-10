import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import image1  from './assets/USB.jpg';
import image2  from './assets/USB1back.jpg';
import image3  from './assets/SLUSBPCB1.jpg';
import image4  from './assets/USBRails.jpg';

const usermanual = process.env.PUBLIC_URL + '/PDF/slusb-users-manual.pdf';
const drawing = process.env.PUBLIC_URL + '/PDF/SLUSBPCB.pdf';
const USBDriverWindows = process.env.PUBLIC_URL + '/Drivers/hdlcrtk.exe';
const USBDriverLinux = process.env.PUBLIC_URL + '/Drivers/linuxwan.tar.xz';
const SerialAPIWindows = process.env.PUBLIC_URL + '/Drivers/hdlcsdk.exe';

const Styles = styled.div`

h1 {
    font-size: 2rem;
}

h3 {
    font-size: 1.30rem;
    text-align: center;
    font-weight: 600;
}

h2 {
    font-size: 1.65rem;
    text-align: center;
    font-weight: 600;
}

.htwoleft {
    font-size: 1.45rem;
    font-weight: 600;
    display:inline;
    text-align: left; 
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

.breadcrumb {
    background-color: rgba(211,211,211, 0);
}

.partNumbers {
    background-color: rgba(211,211,211, 0.2);
    border-radius: 20px;
    padding: 10px;
}
`;

function USBAdapter() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#/synclink">SyncLink® Hardware</Breadcrumb.Item>
                <Breadcrumb.Item active>USB Adapter</Breadcrumb.Item>
            </Breadcrumb>
            <h1>SyncLink® Hardware</h1>
            <hr />
                <Image src={image1} rounded className="float-left mt-4 mr-5 mb-4 ml-4 shadow p-2 bg-white rounded displayImage" />
                <br /><h4>SyncLink® USB Adapter</h4> <br /> <h5>The Ultimate Solution.</h5>
                <br />
                Users can tackle any project with confidence using a laptop, desktop computer, server, ruggedized portable or industrial controller to directly connect to serial devices using any one of the SyncLink's supported RS-232, V.35, RS-422(485/530/530A) interfaces. Three LED lights indicate with precision various connection and interface states, as well as, transmit/receive activity and diagnostic information.
                <br /><br />
                The SyncLink USB utilizes the industry proven MicroGate FPGA Serial Controller. Beyond providing seamless integration between the hardware and software drivers, MicroGate is able to offer customized serial controller interfaces for users needing additional control over the serial links. There is no need for custom hardware but rather quick modifications to the FPGA programming.
                <br /><br />
                Customers may also purchase the SyncLink USB PCB on its own, with any combination of DB25 and USB connectors or LEDs installed or left unpopulated. Using the four mounting holes on the SyncLink USB PCB, solution providers can further customize the adapter to fit their particular packaging and operating requirements. Contact MicroGate for further details.
                <br />
                <Container>
                <Row>
                    <Col>
                        <br />
                        <Image src={image2} rounded className="float-right mt-5 mr-3 mb-4 ml-4 shadow p-2 bg-white rounded displayImage" />
                        <div className="subhead">Other features include:</div>
                        <ul className="ulFormat">
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
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Image src={image3} rounded className="float-left mt-3 mr-5 mb-4 ml-3 shadow p-2 bg-white rounded displayImage" />
                        <br />
                        <div className="subhead">Always Up-To-Date.</div>
                        Free downloadable system drivers give the user access to the latest features and upgrades avaliable from MicroGate.
                        <br /><br />
                        <div className="subhead">Powerful API Engine.</div>
                        Supporting both 32-bit and 64-bit versions of Windows and Linux (x86), the MicroGate Serial API gives developers direct access to the SyncLink adapter and serial link for total control of HDLC/SDLC, BISYNC, MONOSYNC, ISOSYNCHRONOUS, ASYNC and RAW synchronous bit streams. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications.
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Image src={image4} rounded className="float-right mt-3 mr-3 mb-4 ml-5 shadow p-2 bg-white rounded displayImage" />
                        <br /><br />
                        <div className="subhead">Linux Version Capability</div>
                        The release of the Linux drivers for use with SyncLink USB Adapters targets Red Hat Enterprise Linux/CentOS 6.x, 7.x, and 8.x. SyncLink USB is not supported on kernel versions before 2.6.28
                        <br />
                        Many different Linux distributions and kernel versions are available to users. MicroGate urges developers build and install the freely downloadable MicroGate drivers in the target environment to verify compatibility. Should you encounter an incompatibility, contact MicroGate and we may be able to offer help porting to the target environment.
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col>
                        <hr />
                        <h2 >SyncLink USB Adapter Specifications</h2>
                        <hr />
                        <ul>
                            <li>MicroGate FPGA serial controller (one port)</li>
                            <li>USB 2.0 hi‐speed (480Mbps), compatible with USB 2.0 and USB 3.0 ports</li>
                            <li>USB Type B</li>
                            <li>Receptacle to DB25 Male</li>
                            <li>Environmental: Temperature ‐40C to +85C; humidity 0 to 95% non‐condensing; alt. ‐ 200 to +10,000 ft</li>
                            <li>Mechanical: 3.6” length, 2.6” width, 1.9” height</li>
                            <li>Power usage: Bus Powered, 5V, 500mA max (300mA typical)</li>
                            <li>Regulatory: FCC Class A, CE, ANSI C63.4, EN55022 Class A, EN55024, RoHS</li>
                            <li>Connector: DB‐25 (male)</li>
                            <li>Cable Options: DB‐25 (female) to DB‐25 (male); DB‐25 (female) to 34‐pin V.35 (male); DB‐25(female) to 37‐pin RS‐449 (male); DB‐25 (female) to 15‐pin X.21 (male)</li>
                        </ul>
                        <i>A variety of serial protocols and interface standards are supported. Refer to the software documentation included with the card for details on using the adapter for a specific application.</i>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <hr />
                                    <div className="htwoleft">Documentation</div>
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
                                    <hr />
                                    <div className="htwoleft">Software Downloads</div>
                                    <hr />
                                    Hardware Drivers
                                    <ul>
                                        <li><a href={USBDriverWindows} target='_blank' download='hdlcrtk.exe'>SyncLink USB Drivers for Windows</a></li>
                                        <li><a href={USBDriverLinux} target='_blank' download='linuxwan.tar.xz'>SyncLink USB Drivers for Linux</a></li>
                                    </ul>
                                    Microgate Serial API
                                    <ul>
                                        <li><a href={SerialAPIWindows} target='_blank' download='hdlcsdk.exe'>MicroGate Serial API for Windows</a></li>
                                        <li><a href={USBDriverLinux} target='_blank' download='linuxwan.tar.xz'>MicroGate Serial API for Linux</a></li>
                                    </ul>
                                    Additional Software Solutions
                                    <ul>
                                        <li><NavLink to="/LegacyDrivers/">Legacy Drivers</NavLink></li>
                                    </ul>
                                </Col>
                            </Row>
                    </Container>
                    </Col>
                </Row>
                <br /><br />
                <div className="partNumbers">
                <Row>
                    <Col>
                        <hr />
                        <h2>Part Numbers</h2><hr />
                        <div className="subhead2">Product and Ordering Information</div>
                        Use the part numbers below for ordering SyncLink hardware and MicroGate software.
                        Additional product information can be found following the available links below.<br />
                        <br /><br />
                        <h3>SyncLink USB Adapter</h3>
                            <br />
                        <table class="table-hover table">
                            <thead>
                                <tr>
                                <th scope="col">Product Description</th>
                                <th scope="col">Part Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>SyncLink USB Adapter RS-232, V.35, RS422(485/530/530A)</td>
                                <td>1U3170</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h3>MicroGate Software Development Kits</h3>
                            <br />
                        <table class="table-hover table">
                            <thead>
                                <tr>
                                <th scope="col">Product Description</th>
                                <th scope="col">Part Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><div className="subNote2">Windows (32-bit/64-bit)</div>
                                    MicroGate Serial API for Windows</td>
                                <td><div className="subNote2"><NavLink to="/apiwin/">DOWNLOAD</NavLink></div></td>
                                </tr>
                                <tr>
                                <td><div className="subNote2">Linux (32-bit/64-bit)</div>
                                    MicroGate Serial API for Linux</td>
                                <td><div className="subNote2"> <NavLink to="/apilin/">DOWNLOAD</NavLink></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                            <h3>Cables and Options</h3>
                        <br />
                        <table class="table-hover table">
                            <thead>
                                <tr>
                                <th scope="col">Product Description</th>
                                <th scope="col">Part Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Synchronous RS-232 Cable (DB25F-DB25M) 6-feet</td>
                                <td>CMF000</td>
                                </tr>
                                <tr>
                                <td>V.35 Cable (DB25F-34pin Block Connector) 6-feet</td>
                                <td>2534GT</td>
                                </tr>
                                <tr>
                                <td>RS-449 Cable (DB25F-DB37M) 6-feet</td>
                                <td>2537FM</td>
                                </tr>
                                <tr>
                                <td>X.21 Cable (DB25F-DB15M) 6-feet</td>
                                <td>2515FM</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                </div>
            </Container>
                <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default USBAdapter;