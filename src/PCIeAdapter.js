import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import image1  from './assets/SLPCIecomp.jpg';
import image2  from './assets/SLPCIeDB25Cablescomp.jpg';
import image3  from './assets/SLPCIePortscomp.jpg';
import image4 from './assets/slpciecables.png';

const usermanual2port = process.env.PUBLIC_URL + '/PDF/pcie-users-manual.pdf';
const usermanual4port = process.env.PUBLIC_URL + '/PDF/pcie4-users-manual.pdf';
const USBDriverLinux = process.env.PUBLIC_URL + './Drivers/linuxwan.tar.xz';
const SerialAPIWindows = process.env.PUBLIC_URL + '/Drivers/microgate-sdk-windows.zip';

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
}

.displayImage5{
    height:236px;
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

.breadcrumb {
    background-color: rgba(211,211,211, 0);
}

.partNumbers {
    background-color: rgba(211,211,211, 0.2);
    border-radius: 20px;
    padding: 10px;
}

.imagesSameLine {
    width: 75%;
    margin: auto;
}
`;

function PCIeAdapter() {
    window.scrollTo(0,0);
    
    return (
        <React.Fragment>
        <Styles>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#/synclink">SyncLink® Hardware</Breadcrumb.Item>
                <Breadcrumb.Item active>PCIe Adapter</Breadcrumb.Item>
            </Breadcrumb>
            <h1>SyncLink® Hardware</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <div align="center"><Image src={image1} rounded className="float-left mt-4 mr-5 mb-4 ml-4 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                    <br /><h4>SyncLink® PCIe Adapter</h4> <br /> <h5>The Newest PCIe Adapter.</h5><br />
                    The SyncLink PCIe Adapter features bus master control for sustained 10Mbps synchronous communications simultaneously on all ports. The SyncLink PCIe Adapter also supports asynchronous connections up to 8Mbps. The 1x bus connector supports the latest workstation, stand-a-lone server, rack mount server or ruggedize system requiring synchronous or asynchronous connections. The number of adapters one can place in a single system is only limited by the number of slots available in the computer.
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        The SyncLink family of synchronous adapters utilizes the MicroGate FPGA Serial Controller. Beyond providing seamless integration between the hardware and software drivers, MicroGate is able to offer customized serial controller interfaces for users needing additional control over the serial links. There is no need for custom hardware but rather quick modifications to the FPGA programming.
                        <br /><br />
                        <Image src={image3} rounded className="float-right mt-1 mr-5 mb-4 ml-3 shadow p-2 mb-4 bg-white rounded displayImage4" />
                        <b>Other features include:</b><br />
                        <ul className="ulFormat">
                            <li>Each port is individually configurable. Selectable by software or hardware switches.</li>
                            <li>Supports 10Mbps synchronous, 8Mbps asynchronous connections</li>
                            <li>SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNC, RAW bit-synchronous protocols</li>
                            <li>Selectable hardware CRC: CRC-16, CRC-32, None</li>
                            <li>DPLL clock recovery (x8 and x16 sampling)</li>
                            <li>Separate, selectable transmit and receive data clock inputs</li>
                            <li>Baud Rate Generator for sourcing data clocks</li>
                            <li>Variety of transmit preamble and idle patterns</li>
                            <li>Encoding: NRZ,NRZB,NRZ-L,NRZI,NRZ-M,NRZ-S,BIPHASE,FM0,FM1,Manchester,differential biphase level</li>
                            <li>Full control and monitoring of DTR,RTS,DSR,DCD,CTS,RI</li>
                            <li>Selectable interface for RS‐232, V.35 (2-port model), RS‐422/485, RS‐530, RS‐530A, RS‐449, X.21</li>
                            <li>Time Division Multiplexing (TDM) compatible with TDM mode of McASP</li>
                            <li>General Purpose I/O (GPIO) signal access</li>
                            <li>Loopback mode for diagnostics</li>
                        </ul>
                        <div className="subhead">Always Up-To-Date.</div>
                        Free downloadable system drivers give the user access to the latest features and upgrades avaliable from MicroGate.
                        <br /><br />
                        <div className="subhead">Full-Featured Software Development Kit.</div>
                        Supporting both 32-bit and 64-bit versions of Windows and Linux (x86), the MicroGate Serial API gives developers direct access to the SyncLink adapter and serial link for total control of HDLC/SDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNC and RAW synchronous bit streams. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications.
                        <br /><br />
                        <div className="subhead">Additional Support.</div>
                        The SyncLink drivers are part of the base Linux kernel, providing direct support with Linux networking options.
                        <br /><br />
                        Download the Hardware Guide and MicroGate Serial API for Windows/Linux for details on using the card for a specific application.
                        <br /><br />
                        <div className="subhead2">SyncLink PCIe Adapter Specifications</div>
                        A variety of serial protocols and interface standards are supported. Refer to the software documentation included with the card for details on using the card for a specific application.
                        <br /><br />
                        <div align="center">
                        <Image src={image2} rounded className="m-4 shadow p-2 bg-white rounded displayImage3" />
                        <Image src={image4} rounded className="m-4 shadow p-2 bg-white rounded displayImage5" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h2>SyncLink PCIe Adapter</h2>
                        <hr />
                        <ul>
                            <li>MicroGate FPGA serial controller</li>
                            <li>Environmental: Temperature ‐40C to +85C; humidity 0 to 95% non‐condensing; alt. ‐ 200 to +10,000 ft</li>
                            <li>Mechanical: Standard PCI Express short card; length 3.8", height 4.0, Weight 3Oz</li>
                            <li>Power usage:2.5W</li>
                            <li>Regulatory: FCC Class B, CE, ANSI C63.4, EN55022 Class B, EN55024, RoHS</li>
                            <li>Connector: DB‐25 (male)</li>
                            <li>Cable Options: DB‐25 (female) to DB‐25 (male); DB‐25 (female) to 34‐pin V.35 (male); DB‐25(female) to 37‐pin RS‐449 (male); DB‐25 (female) to 15‐pin X.21 (male)</li>
                        </ul>
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
                                        <li><a href={usermanual2port} target="_blank" rel="noopener noreferrer">SyncLink PCIe 2-Port Hardware Guide</a></li>
                                        <li><a href={usermanual4port} target="_blank" rel="noopener noreferrer">SyncLink PCIe 4-Port Hardware Guide</a></li>
                                    </ul>
                                    Serial Interface Information
                                    <ul>
                                        <li><NavLink to="/Serialpinouts/">Serial Interface/Cable Pinouts</NavLink></li>
                                        <li><NavLink to="/NullModem/">Null Modem Details</NavLink></li>
                                        <li><NavLink to="/Loopback/">Loopback Adapter Details</NavLink></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <hr />
                                    <div className="htwoleft">Software Downloads</div>
                                    <hr />
                                    Hardware Drivers
                                    <ul>
                                        <li><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>SyncLink PCIe Adapter Drivers for Windows</a></li>
                                        <li><a href={USBDriverLinux} target='_blank' download='linuxwan.tar.xz'>SyncLink PCIe Adapter Drivers for Linux</a></li>
                                    </ul>
                                    Microgate Serial API
                                    <ul>
                                        <li><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>MicroGate Serial API for Windows</a></li>
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
                                <td>SyncLink PCIe Adapter/PCIe/2-port RS-232, V.35, RS422(485/530/530A)</td>
                                <td>2E0170</td>
                                </tr>
                                <tr>
                                <td>SyncLink PCIe Adapter/PCIe/4-port RS-232, RS422(485/530/530A)</td>
                                <td>4E0170</td>
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
            <Container>
                <Row>
                    <Col>
                    <div align="center"></div> <br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div align="center"></div> <br />
                    </Col>
                </Row>
            </Container>
            <br />
            </Container>
        </Styles>
        </React.Fragment>
    );
}

export default PCIeAdapter;