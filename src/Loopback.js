import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Styles = styled.div`
 hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

.main-footer {
     background-color: #f0f0f0;
     max-width: 100%;
 }

 h3 {
    color: #72192d;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

bot {
    color: #777;
    &:hover {
        color: #0000EE;
    }
}

h4 {
    color: #72192d;
    font-size: 1.15rem;
    font-weight: 600;
}

h5 {

}

li {
    padding: .5em;
}

ul {
    list-style: none;
    padding-left: 0;
    list-style-position: inside;
    padding-bottom: 0;
}

p {
    white-space: nowrap;
}

.navlink {
    color: black;
    font-weight: 500;
    &:hover {
        color: #0000EE;
    }
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

export const Loopback = () => (
    <React.Fragment>
        <Styles>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#/synclink">SyncLink® Hardware</Breadcrumb.Item>
            <Breadcrumb.Item active>Loopback Specifications</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Loopback Connector Specifications</h1>
        <hr />
        The following tables provide the wiring diagrams for the loopback test adapter that is supplied with SyncLink adapters. This loopback plug is used with the "External Diagnostics" that are part of the Windows Device Manager options and Linux driver.
        <br /><br />
            <Container>
                <h3>Loopback Connector Specifications</h3>
                <hr />
                    <Row>
                        <Col>
                            <b>Signal</b>
                        </Col>
                        <Col>
                            <b>Pin Connections</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            DTR(A),DSR(A),DCD(A)<br />
                        </Col>
                        <Col>
                            20,6,8
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DTR(B),DSR(B),DCD(B)<br />
                        </Col>
                        <Col>
                            23,22,10
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS(A),CTS(A)<br />
                        </Col>
                        <Col>
                            4,5
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS(B),CTS(B)<br />
                        </Col>
                        <Col>
                            19,13
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD(A),RxD(A)<br />
                        </Col>
                        <Col>
                            2,3
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD(B),RxD(B)<br />
                        </Col>
                        <Col>
                            14,16
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            AuxCLK(A),TxCLK(A),RxCLK(A)<br />
                        </Col>
                        <Col>
                            24,15,17
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            AuxCLK(B),TxCLK(B),RxCLK(B)<br />
                        </Col>
                        <Col>
                            11,12,9
                        </Col>
                    </Row>
                    <hr />
                    <br /><br />
                </Container>
        </Styles>
    </React.Fragment>
)