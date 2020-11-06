import React from 'react';
import { HomeCarousel } from './components/HomeCarousel';
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import col1 from './assets/SLUSB.jpg';
import col2 from './assets/blocksa.jpg';
import col3 from './assets/images-1a.jpg';
import col4 from './assets/PCIePC104b.jpg';

const Styles = styled.div`
hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

.slogan {
    text-align: center;
	color: #414141;
	font-family: "Open Sans", sans-serif;
}

p {
    padding-top:7px;
	font-size: 18px;
	font-weight: 100;
}

h2 {
    font-size: 1.5rem;
    font-weight: 600;
}

h3 {
    font-size: 1.75rem;
	font-style: italic;
}

h4 {
    color: #72192d;
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
}

container {
    flexDirection: 'column';
    justifyContent: 'center';
    alignItems: 'center';
    height: '100%';
  }

.page {
    min-height: 100%;
    margin-bottom: -100px;
    padding-bottom: 100px;
  }

`;

export const Home = () => ( 
    <React.Fragment>
        <Styles>
            <div className="page">
            <div className="slogan">
                <HomeCarousel />
                <p>We are MicroGate®, designing and manufacturing specialized serial communications solutions since 1982.</p>
                <h2>Direct support from experienced hardware and software engineers - <br /></h2>
                    <h3>"Customer Driven, by Design"</h3>
                    <br />
            </div>
            <Container>
                <Row>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                    <h4>SyncLink® USB</h4>
                    Based upon MicroGate's proven FPGA serial controller, the SyncLink USB supports synchronous line speeds to 10Mbps and interfaces with systems using USB 2.0 hi-speed (480Mbps) ports and is compatible with USB 3.0 ports.
                    <div align="center"><NavLink to="/USBAdapter/" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br /><br /><br />
                    </Col>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded"/></div> <br />
                    <h4>Developer/OEM Support</h4>
                    MicroGate offers developers a unique support structure not found with other suppliers – support direct from the manufacturer. Leveraging the decades of technical design and software support found behind the SyncLink products, customers ensure their solutions are delivered on-time and without interruption.
                    <div align="center"><NavLink to="/" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br /><br /><br />
                    </Col>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col3} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded"/></div> <br />
                    <h4>Windows and Linux API</h4>
                    The MicroGate Serial API supports SDLC, HDLC, BISYNC, MONOSYNC, ASYNC, ISOCHRONOUS and Raw Bit-Synchronous serial protocols. The API allows direct control of the SyncLink hardware or high-level control of the link layer protocol.
                    <div align="center"><NavLink to="/" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br /><br /><br />
                    </Col>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col4} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded"/></div> <br />
                    <h4>SyncLink® Adapters</h4>
                    The SyncLink family of adapters are synchronous/asynchronous, full duplex, serial communications cards supporting SDLC, HDLC, WAN, SNA, and BSC communications. SyncLink cards are available in PCI, PCI Express, and USB form factors.
                    <div align="center"><NavLink to="/" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br /><br /><br />
                    </Col>
                </Row>
            </Container>
            </div>
        </Styles>
    </React.Fragment>
)