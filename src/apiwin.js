import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import image1  from './assets/USB.jpg';
import image2  from './assets/USB1back.jpg';
import image3  from './assets/SLUSBPCB1.jpg';
import image4  from './assets/USBRails.jpg';
import image5  from './assets/rs232.jpg';
import image6  from './assets/v35.jpg';
import image7  from './assets/rs449.jpg';
import image8  from './assets/x21.jpg';
import image9 from './assets/gt4cables1.jpg'

const usermanual = process.env.PUBLIC_URL + '/PDF/slusb-users-manual.pdf';
const gt4eusermanual = process.env.PUBLIC_URL + '/PDF/gt4e-users-manual.pdf';
const pcieusermanual = process.env.PUBLIC_URL + '/PDF/pcie-users-manual.pdf';
const drawing = process.env.PUBLIC_URL + '/PDF/SLUSBPCB.pdf';
const USBDriverLinux = process.env.PUBLIC_URL + '/Drivers/linuxwan.tar.xz';
const SerialAPIWindows = process.env.PUBLIC_URL + '/Drivers/microgate-sdk-windows.zip';
const serialapiwindowspdf = process.env.PUBLIC_URL + '/PDF/serial-api-windows.pdf';
const rtkwindows = process.env.PUBLIC_URL + '/PDF/rtk-windows.pdf';

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
    height:165px;
    width:285px;
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

.breadcrumb {
    background-color: rgba(211,211,211, 0);
}

.partNumbers {
    background-color: rgba(211,211,211, 0.2);
    border-radius: 20px;
    padding: 10px;
}
`;

function apiwin() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Serial API for Windows</Breadcrumb.Item>
            </Breadcrumb>
            <h1>MicroGate® Serial API</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <Image src={image2} rounded className="float-right mt-4 mr-5 mb-4 ml-4 shadow p-2 mb-4 bg-white rounded" />
                    <br /><h4>MicroGate® Serial API for Windows</h4> <br /> <h5>Full-Featured Software Development Kit for Windows.</h5><br />
                    The MicroGate Serial API provides a serial communications Application Program Interface for Microsoft Windows using the SyncLink family of adapters (USB, PCI, PCI Express, PC/104+). The API supports multiple serial protocols including SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNCHRONOUS and RAW bit-synchronous. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications. The API allows direct control of the serial hardware. <br /><br />
                    The MicroGate Serial API is FREE and may be <a href={SerialAPIWindows} className="text-link" target='_blank' rel="noopener noreferrer" download>downloaded</a> at any time from the MicroGate website. <br/><br/>
                    Download the <a href={serialapiwindowspdf} className="text-link" target="_blank" rel="noopener noreferrer">Guide to MicroGate Serial Communications for Windows</a> for complete details regarding the use of SyncLink hardware, driver and software-development-kit options, and Windows.
                    <br/><br/> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Image src={image9} rounded className="float-right justify-content-sm-center mt-0 mr-4 mb-4 ml-4 shadow p-2 bg-white rounded" />
                    <div className="subhead">Supported Windows Versions</div>
                        <ul className="ulFormat">
                            <li>Windows XP (Server 2003/2003R2)</li>
                            <li>Windows Vista (Server 2008)</li>
                            <li>Windows 7 (Server 2008R2)</li>
                            <li>Windows 8 (Server 2012)</li>
                            <li>Windows 8.1 (Server 2012R2)</li>
                            <li>Windows 10 (Server 2016-2022)</li>
                            <li>Windows 11</li>
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
                            <li><a href={serialapiwindowspdf} target="_blank" rel="noopener noreferrer">Guide to MicroGate Serial Communications for Windows</a></li>
                            <li><a href={rtkwindows} target="_blank" rel="noopener noreferrer">Guide to MicroGate Serial Communications Run-Time-Kit for Windows</a></li>
                        </ul>
                        <div className="subhead2">Serial API Downloads</div>
                        <ul className="ulFormat">
                            <li><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>microgate-sdk-windows.zip</a>&emsp;Complete SDK, documentation, and sample program source.</li>
                        </ul>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <hr />
                        <div className="htwoleft">Documentation</div>
                        <hr />
                        MicroGate Software Guides
                        <ul>
                            <li><a href={serialapiwindowspdf} target="_blank" rel="noopener noreferrer">Serial Communications Guide for Windows</a></li>
                        </ul>
                        Hardware Guides
                        <ul>
                            <li><a href={usermanual} target="_blank" rel="noopener noreferrer">SyncLink USB Hardware Guide</a></li>
                            <li><a href={gt4eusermanual} target="_blank" rel="noopener noreferrer">SyncLink GT4e Hardware Guide</a></li>
                            <li><a href={pcieusermanual} target="_blank" rel="noopener noreferrer">SyncLink PCIe Hardware Guide</a></li>
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
                            <li><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>SyncLink Drivers for Windows</a></li>
                        </ul>
                        Microgate Serial API
                        <ul>
                            <li><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>MicroGate Serial API for Windows</a></li>
                        </ul>
                        <NavLink to="/LegacyDrivers/">Legacy Drivers</NavLink>
                    </Col>
                </Row>
                <div className="partNumbers">
                <Row>
                    <Col>
                        <hr />
                        <h2>Part Numbers</h2><hr />
                        <div className="subhead2">Product and Ordering Information</div>
                        Use the part numbers below for ordering SyncLink hardware and MicroGate software.
                        Additional product information can be found following the available links below.<br />
                        <br /><br />
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
                                <td><a href={SerialAPIWindows} target='_blank' rel="noopener noreferrer" download>DOWNLOAD</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </Col>
                </Row>
                </div>
                <br />
            </Container>
        </Styles>
        </React.Fragment>
    );
}

export default apiwin;