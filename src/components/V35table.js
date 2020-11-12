import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

.main-footer {
     background-color: #f0f0f0;
     max-width: 100%;
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
`;

export const V35table = () => (
    <React.Fragment>
        <Styles>
        <Container>
            <h2>V.35 Male DTE</h2>
            <hr />
                <Row>
                    <Col>
                        <b>Product Description</b>
                    </Col>
                    <Col>
                        <b>Electrical Description</b>
                    </Col>
                    <Col>
                        <b>DB25 Pin #</b>
                    </Col>
                    <Col>
                        <b>V.35 Block Pin #</b>
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
                        A
                    </Col>
                    <Col>
                        --
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        TxD (-/A), Transmit Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        2
                    </Col>
                    <Col>
                        P
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RxD (-/A), Receive Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        3
                    </Col>
                    <Col>
                        R
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
                        RS-232/V28
                    </Col>
                    <Col>
                        4
                    </Col>
                    <Col>
                        C
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
                        RS-232/V28
                    </Col>
                    <Col>
                        5
                    </Col>
                    <Col>
                        D
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
                        RS-232/V28
                    </Col>
                    <Col>
                        6
                    </Col>
                    <Col>
                        E
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
                        B
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
                        RS-232/V28
                    </Col>
                    <Col>
                        8
                    </Col>
                    <Col>
                        F
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RxC (+/B), Receive Clock<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        9
                    </Col>
                    <Col>
                        X
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        AuxClk, DTE Clock Output<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        24
                    </Col>
                    <Col>
                        24
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        AuxClk (+/B), DTE Clock Output<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        11
                    </Col>
                    <Col>
                        W
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        TxC (+/B) Transmit Clock<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        12
                    </Col>
                    <Col>
                        AA
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        TxD (+/B), Transmit Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        14
                    </Col>
                    <Col>
                        S
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        TxC (-/A), Transmit Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        15
                    </Col>
                    <Col>
                        Y
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RxD (+/B), Receive Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        16
                    </Col>
                    <Col>
                        T
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RxC (-/A), Receive Clock<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        17
                    </Col>
                    <Col>
                        V
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
                        RS-232/V28
                    </Col>
                    <Col>
                        18
                    </Col>
                    <Col>
                        NC
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
                        H
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RL, Local Loopback Control<br />
                    </Col>
                    <Col>
                        RS-232/V.28
                    </Col>
                    <Col>
                        21
                    </Col>
                    <Col>
                        NC
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
                        NC
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        AuxClk (-/A), DTE Clock Output<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        24
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
)