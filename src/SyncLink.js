import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import image1  from './assets/USB.jpg';
import image2  from './assets/SLPCIecomp.jpg';
import image3 from './assets/GT4e.jpg';

const Styles = styled.div`
h1 {
    font-size: 2rem;
}
h4 {
    color: #72192d;
    font-size: 1.5rem;
    font-weight: 600;
    white-space: nowrap;
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
`;

export const SyncLink = () => (
    <Styles>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>SyncLink® Hardware</Breadcrumb.Item>
            </Breadcrumb>
        <h1>SyncLink® Hardware</h1>
        <hr />
        <Container>
            <Row>
                <Col>
                <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                </Col>
                <Col>
                <br /><h4>SyncLink® USB Adapter</h4><br />
                High-speed USB adapter using the proven MicroGate FPGA serial controller found on every SyncLink serial card. Supports RS-232, V.35 and RS-422 (485/530/530A) connections from a single device.<br /><br />
                The SyncLink USB adapter is the ultimate go-anywhere synchronous serial communications solution.
                <div align="center"><NavLink to="/USBAdapter" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                </Col>
            </Row>
            <hr />
            <br />
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                <br /><h4>SyncLink® PCIe Adapter</h4><br />
                High-speed USB adapter using the proven MicroGate FPGA serial controller found on every SyncLink serial card. Supports RS-232, V.35 and RS-422 (485/530/530A) connections from a single device.<br /><br />
                The SyncLink USB adapter is the ultimate go-anywhere synchronous serial communications solution.
                <div align="center"><NavLink to="/PCIeAdapter" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                <div align="center"><Image src={image2} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                </Col>
            </Row>
            <hr />
            <br />
            <Row>
                <Col>
                <div align="center"><Image src={image3} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded displayImage" /></div> <br />
                </Col>
                <Col>
                <br /><h4> SyncLink® GT4e Adapter </h4><br />
                Modern PCI Express (PCIe) design supporting RS-232, V.35, RS422(485/530) connections and the latest servers available on the market today.<br /><br />
                The SyncLink PCI Express(PCIe) adapters feature bus master control for sustained 10Mbps synchronous communications simultaneously on all four ports. The SyncLink GT4e supports asynchronous connections up to 8Mbps.
                <div align="center"><NavLink to="/GT4e" className="navlink px-2"><Button variant="secondary" size="sm" className="m-3">Learn More</Button></NavLink></div>
                </Col>
            </Row>
            <br />
        </Container>
    </Styles>
)