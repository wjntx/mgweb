import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/RS-232.jpg';

import usermanual from './PDF/slusb-users-manual.pdf';
import drawing from './PDF/SLUSBPCB.pdf';

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
`;

function Serialpinouts() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
        <h1>Serial Interface/Cable Pinouts</h1>
        <hr />
        <Container>
            <Row>
                <Col>
                <br /><br />
                <div align="center"><Image src={image1} rounded className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" /></div> <br />
                </Col>
                <Col>
                <br />
                    <h5>RS-232</h5><br />
                    The RS-232 standard uses single ended signals on a DB-25 connector. The adapter DB-25 connector follows this standard when the port jumpers are installed for RS-232. Use any straight through 25 conductor DB-25M to DB-25F cable (such as MicroGate Part # CMF000) to connect the adapter connector to the communications equipment. The maximum data rate supported by the adapter when using RS-232 is 128Kbps. Cable length and signal loading may reduce the maximum usable data rate from this value.
                    <br /><br /><br />
                </Col>
            </Row>
            <br />
        </Container>
            <Container>
                <h2>RS-232 DB-25 Male DTE</h2>
                <hr />
                    <Row>
                        <Col>
                            <b>Product Description</b>
                        </Col>
                        <Col>
                            <b>Electrical Description</b>
                        </Col>
                        <Col>
                            <b>Pin #</b>
                        </Col>
                        <Col>
                            <b>Direction</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            Earth/Shield Ground<br />
                        </Col>
                        <Col>
                            --
                        </Col>
                        <Col>
                            1
                        </Col>
                        <Col>
                            --
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD, Transmit Data<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            2
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxD, Receive Data<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            3
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS, Request To Send<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            4
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            CTS, Clear To Send<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            5
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DSR, Data Carrier Detect<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            6
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            Signal Ground<br />
                        </Col>
                        <Col>
                            --
                        </Col>
                        <Col>
                            7
                        </Col>
                        <Col>
                            --
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DCD, Data Carrier Detect<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            8
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxC, Transmit Clock<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            9
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxC, Receive Clock<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            17
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            LL, Local Loopback Control<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            18
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DTR, Data Terminal Ready<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            20
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RL, Remote Loopback Control<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            21
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RI, Ring Indicator<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            22
                        </Col>
                        <Col>
                            Input
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RL, Remote Loopback Control<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            21
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                        AuxClk, DTE Clock Output<br />
                        </Col>
                        <Col>
                            RS-232/V.28
                        </Col>
                        <Col>
                            24
                        </Col>
                        <Col>
                            Output
                        </Col>
                    </Row>
                    <hr />
                    <br /><br />
                </Container>
        </Styles>
        </React.Fragment>
    );
}

export default Serialpinouts;