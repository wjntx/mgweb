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

import usermanual from './PDF/slusb-users-manual.pdf';
import gt4eusermanual from './PDF/gt4e-users-manual.pdf';
import pcieusermanual from './PDF/pcie-users-manual.pdf';
import linuxoverview from './assets/LinuxOverview(2020).jpg';
import drawing from './PDF/SLUSBPCB.pdf';
import USBDriverWindows from './Drivers/hdlcrtk.exe';
import USBDriverLinux from './Drivers/linuxwan.tar.xz';
import SerialAPIWindows from './Drivers/hdlcsdk.exe';
import serialapiwindowspdf from './PDF/serial-api-windows.pdf';
import serialapilinuxpdf from './PDF/serial-api-linux.pdf';
import rtkwindows from './PDF/rtk-windows.pdf';

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
    padding-bottom: 10px;
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

.text-link {
    font-weight: 500;
}

.subNote {
    font-weight: 400;
    font-size: .85rem;
}

.breadcrumb {
    background-color: rgba(211,211,211, 0);
}
`;

function apilin() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Serial API for Linux</Breadcrumb.Item>
            </Breadcrumb>
            <h1>MicroGate® Serial API</h1>
            <hr />
            <Container>
                <Row>
                    <Col>
                    <br /><h4>MicroGate® Serial API for Linux</h4> <br /> <h5>Full-Featured Software Development Kit for Linux.</h5>
                    The MicroGate Serial API provides a serial communications Application Program Interface for Linux using the SyncLink family of adapters (USB, PCI, PCI Express, PC/104+). The API supports multiple serial protocols including SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNCHRONOUS, and RAW bit-synchronous. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications. The API allows direct control of the serial hardware.The MicroGate Serial API provides a serial communications Application Program Interface for Linux using the SyncLink family of adapters (USB, PCI, PCI Express, PC/104+). The API supports multiple serial protocols including SDLC, HDLC, BISYNC, MONOSYNC, ISOCHRONOUS, ASYNCHRONOUS, and RAW bit-synchronous. These protocols are used to build applications for networking, X.25, IBM SDLC (SNA), satellite, radio and other serial communications. The API allows direct control of the serial hardware.<br /><br />
                    System calls are used to open a serial port, configure the port, manipulate serial interface signals, and send and receive data.<br /><br />
                    The MicroGate Serial API is FREE and may be <a href={USBDriverLinux} className="text-link" target='_blank' rel="noopener noreferrer" download>downloaded</a> at any time from the MicroGate website. <br/><br/>
                    Download the <a href={serialapilinuxpdf} className="text-link" target="_blank" rel="noopener noreferrer"> Guide to MicroGate Serial Communications for Linux</a> for complete details regarding the use of SyncLink hardware, driver and software-development-kit options, and Linux.<br/><br/>      
                    </Col>
                    <Col>
                        <br /><br /><br />
                        <div align="center"><Image src={image2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                        <div align="center"><Image src={image9} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} className="toggleLink" variant="link" eventKey="0">
                                    Overview<div className="fas fa-caret-down"></div>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <div className="subhead">Supported Linux Versions</div>
                                <ul className="ulFormat">
                                    <li>Red Hat Enterprise Linux/CentOS 6.X, 7.X, 8.X</li>
                                    <li>openSUSE Leap 15.x</li>
                                    <li>Debian 8.X, 9.X, 10.X</li>
                                    <li>Ubuntu 14.04LTS, 16.04LTS, 18.04LTS, 20.04LTS</li>
                                    <li>Raspbian 8, 9 on Raspberry Pi 3 Model B/Pi 4 Model B</li>
                                    <li>Generic (non-vendor specific) kernel versions up to 5.7</li>
                                </ul>
                                
                                Many different Linux distributions and kernel versions are available to users. As a first step, MicroGate urges developers build and install the freely downloadable drivers in the target environment to verify compatibility. If your target kernel or distrubution is different than the supported version identified above, MicroGate offers consulting and development services for those projects where Linux kernel driver development expertise is required. Contact MicroGate for details.
                                <br /><br />

                                <div className="subhead">Known Version Limits</div>
                                Kernel versions before 2.6.5 are not supported.
                                <br /><br />
                                <div className="subhead">Required Knowledge</div>
                                Developing with SyncLink devices on Linux requires the following knowledge:
                                <ul className="ulFormat">
                                    <li>C programming skills</li>
                                    <li>Basic Linux administration</li>
                                    <li>Building and installing Linux device drivers</li>
                                    <li>Serial communication details for target application</li>
                                </ul>

                                MicroGate offers consulting and development services for projects where this knowledge is absent. Contact MicroGate for details.
                                <br /><br />

                                <div className="subhead">MicroGate Serial Communications Overview</div>
                                User mode applications access the serial device in one of two different ways: using standard network system calls or directly using MicroGate serial API (application programming interface) calls. The access method depends on application specific requirements. For network access, the application generally knows nothing about serial communications and relies on configuring the serial device and device driver to appear as a standard network device. The serial API allows direct control of the serial device by a custom serial application that controls the detailed operation.
                                <br /><br />
                                In current Linux kernels, the Generic HDLC kernel component supplies a framework for using serial devices as network devices. This component provides several protocol options, including frame relay, Point-to-Point-Protocol and Cisco HDLC. An overview of this layer is provided later in this document. Generic HDLC is only used when configuring the SyncLink serial device as a network device. Custom serial applications directly accessing the SyncLink device driver do not use this layer. The Generic HDLC layer is not written or maintained by MicroGate.
                                <br /><br />
                                <div align="center"><Image src={linuxoverview} width="75%" rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> 
                                <div className="subNote text-center">Software Overview Diagram.</div><br />
                                
                                <div className="subhead2">Software Included</div>
                                The MicroGate Serial API contains programming documentation, sample programs for the C/C++, C# and Python 3 languages, SyncLink device driver, and HDLC line discipline. Source is included for all provided software including the device driver and HDLC line discipline. SyncLink and its device driver are designed to support both single and multi-processor operation, as well as, 64-bits under x86_64 architecture when using Linux.
                                <br /><br />

                                <div className="subhead2">System Calls Used</div>
                                The MicroGate Serial API consists of system calls used for controlling and monitoring communications. Most operations act on a port (file descriptor) that is opened and closed with the open() and close() system calls. Data is exchanged with the write() and read() system calls. Port control and monitoring is accomplished with the ioctl() system call using a mix of standard tty ioctl codes (prefix TIOC) and SyncLink specific ioctl codes (prefix MGSL).
                                <br /><br />

                                <div className="subhead2">Extensive Debug Logging</div>
                                For use in application debugging and for diagnosing communications problems, the SyncLink device driver has a configurable debug level (specified when loading the driver) that output varying levels of debug information to the system log. Debug levels include logging of complete data blocks, informational events, error events, system calls, and interrupt events.
                                <br /><br />

                                <div className="subhead2">Hardware Supported</div>
                                The MicroGate Serial API supports all the SyncLink hardware MicroGate manufactures. Once you develop an application using the SDK, you can be confident any platform your users require will have a ready-to-go solution.
                                <br /><br />

                                <div className="subhead2">Optional General Purpose I/O Signals</div>
                                The SyncLink family of serial adapters can be ordered with an optional header that provides general purpose digital (TTL) input/output signals. These signals can be configured (direction), controlled, and monitored through the serial API. Contact our sales department for ordering details.
                                <br /><br />

                                <div className="subhead2">Serial API Downloads</div>
                                <ul className="ulFormat">
                                    <li><a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>linuxwan.tar.xz</a>&emsp;	Complete SDK, documentation, and sample programs.</li>
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
                                                    MicroGate Software Guides
                                                    <ul>
                                                        <li><a href={serialapilinuxpdf} target="_blank" rel="noopener noreferrer">Serial Communications Guide for Linux</a></li>
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
                                                    <h3>Software Downloads</h3>
                                                    <hr />
                                                    Hardware Drivers
                                                    <ul>
                                                        <li><a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>SyncLink Drivers for Linux</a></li>
                                                    </ul>
                                                    Microgate Serial API
                                                    <ul>
                                                        <li><a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>MicroGate Serial API for Linux</a></li>
                                                    </ul>
                                                    <NavLink to="/LegacyDrivers/">Legacy Drivers</NavLink>
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
                                    <h2>MicroGate Software Development Kits (32-bit/64-bit)</h2>
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
                                            <div className="subNote2">Linux (32-bit/64-bit)</div>
                                            MicroGate Serial API for Linux<br /><br />
                                            </Col>
                                            <Col>
                                            <br />
                                            <div className="subNote2"> </div>
                                            <a href={USBDriverLinux} target='_blank' rel="noopener noreferrer" download>DOWNLOAD</a>
                                            </Col>
                                            <hr />
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
                                                    <div className="subhead2"><NavLink to="/apiwin/">MicroGate Serial API for Windows</NavLink> (Download FREE)</div>
                                                    Serial Communications Software Development Kit for Linux (SDLC,HDLC,RAW,BISYNC,ISOCHRONOUS,MONOSYNC,ASYNC)
                                                    <br /><hr />
                                                    <div className="subhead2"><NavLink to="/USBAdapter/">SyncLink USB</NavLink></div>
                                                    High-speed USB adapter using the proven MicroGate FPGA serial controller found on every SyncLink serial card. Supports RS-232, V.35 and RS-422 (485/530/530A) connections from a single device.
                                                    <br /><hr />
                                                    <div className="subhead2"><NavLink to="/PCIeAdapter/">SyncLink PCIe</NavLink></div>
                                                    2-port PCI Express (PCIe) adapter supporting RS-232, V.35 and RS-422 (485/530) connections, as well as, a wide range of synchronous/asynchronous protocols.
                                                    <br /><hr />
                                                    <div className="subhead2"><NavLink to="/GT4e/">SyncLink GT4e</NavLink></div>
                                                    4-port Modern PCI Express (PCIe) design supporting RS-232, V.35, RS422(485/530) connections and the latest servers available on the market today.
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

export default apilin;