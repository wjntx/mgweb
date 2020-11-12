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

export const Rs422table = () => (
    <React.Fragment>
        <Styles>
        <Container>
            <h2>RS‐422/RS‐530/RS‐449 Male DTE</h2>
            <hr />
                <Row>
                    <Col>
                        <b>Product Description</b>
                    </Col>
                    <Col>
                        <b>Electrical Description</b>
                    </Col>
                    <Col>
                        <b>DB25M RS-530 Pin #</b>
                    </Col>
                    <Col>
                        <b>DB37M RS-449 Pin #</b>
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
                        1
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
                        4
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
                        6
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RTS (-/A), Request To Send<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        4
                    </Col>
                    <Col>
                        7
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        CTS (-/A), Clear To Send<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        5
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
                        DSR (-/A), Data Set Ready<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        6
                    </Col>
                    <Col>
                        11
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
                        19
                    </Col>
                    <Col>
                        --
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        DCD (-/A), Data Carrier Detect<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        8
                    </Col>
                    <Col>
                        13
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
                        26
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        DCD (+/B), Data Carrier Detect<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        10
                    </Col>
                    <Col>
                        31
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
                        35
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
                        23
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        CTS (+/B), Clear To Send<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        13
                    </Col>
                    <Col>
                        27
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
                        22
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        TxC (-/A), Transmit Clock<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        15
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
                        RxD (+/B), Receive Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        16
                    </Col>
                    <Col>
                        24
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
                        8
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
                        10
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        RTS, (+/B), Request To Send<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        19
                    </Col>
                    <Col>
                        25
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        DTR (-/A), Data Terminal Ready<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        20
                    </Col>
                    <Col>
                        12
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
                        14
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        DSR (+/B), Data Set Ready<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        22
                    </Col>
                    <Col>
                        29
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        DTR (+/B), Data Terminal Ready<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        23
                    </Col>
                    <Col>
                        30
                    </Col>
                    <Col>
                        Output
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
                        17
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