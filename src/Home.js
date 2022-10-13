import React from 'react';
import { HomeCarousel } from './components/HomeCarousel';
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import col1 from './assets/SLUSB.jpg';
import col2 from './assets/SLPCIe(SMALL).jpg';
import col3 from './assets/SLGT4e(SMALL).jpg';
import col4 from './assets/images-1a.jpg';

const Styles = styled.div`
hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

Button {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
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

  .displayImage{
    height:130px;
    width:220px;
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
                    <div align="center"><Image src={col1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                    <NavLink to="/USBAdapter/" style={{ textDecoration: 'none' }}><h4>SyncLink® USB</h4></NavLink>
                    Based upon MicroGate's proven FPGA serial controller, the SyncLink USB supports synchronous line speeds to 10Mbps and is compatible with all USB versions and operates at USB 2 speeds.
                    <div align="center"><NavLink to="/USBAdapter/" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br />
                    </Col>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage"/></div> <br />
                    <NavLink to="/PCIeAdapter/" style={{ textDecoration: 'none' }}><h4>SyncLink® PCIe</h4></NavLink>
                    The newest PCI Express (PCIe) offering from MicroGate. Leveraging MicroGate's proven FPGA serial controller, the SyncLink PCIe operates synchronous line speeds to 10Mbps and serial RS232, V.35, RS422/530/530A interfaces. A wide range of synchronous and asynchronous protocols are directly supported by the SyncLink PCIe.
                    <div align="center"><NavLink to="/PCIeAdapter" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br />
                    </Col>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col3} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage"/></div> <br />
                    <NavLink to="/GT4e/" style={{ textDecoration: 'none' }}><h4>SyncLink® GT4e</h4></NavLink>
                    The SyncLink GT4e Adapter features bus master control for sustained 10Mbps synchronous communications simultaneously on all four ports and asynchronous connections up to 8Mbps.  Available APIs provide developers direct access to a wide array of communications protocols and serial connections.
                    <div align="center"><NavLink to="/GT4e" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                    <br /><br />
                    </Col>
                    <Col className="col-lg-3">
                    <div align="center"><Image src={col4} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage"/></div> <br />
                    <h4>Windows and Linux API</h4>
                    The MicroGate Serial API supports SDLC, HDLC, BISYNC, MONOSYNC, ASYNC, ISOCHRONOUS and Raw Bit-Synchronous serial protocols.
                    <div align="center"><NavLink to="/apiwin" className="navlink px-2"><Button variant="secondary" size="sm" className="m-0">Windows</Button></NavLink><NavLink to="/apilin" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Linux</Button></NavLink></div>
                    <br /><br />
                    </Col>
                </Row>
            </Container>
            </div>
        </Styles>
    </React.Fragment>
)