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

export const X21table = () => (
    <React.Fragment>
        <Styles>
        <Container>
            <h2>X.21 Male DTE</h2>
            <hr />
                <Row>
                    <Col>
                        <b>Signal Name</b>
                    </Col>
                    <Col>
                        <b>Electrical Description</b>
                    </Col>
                    <Col>
                        <b>DB25 Pin #</b>
                    </Col>
                    <Col>
                        <b>DB15 Pin#</b>
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
                        T(-/A), Transmit Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        2
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
                        R(-/A), Receive Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        3
                    </Col>
                    <Col>
                        4
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        I(-/A), Indicator (DSR/DCD)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        6,8
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
                        Signal Ground<br />
                    </Col>
                    <Col>
                        --
                    </Col>
                    <Col>
                        7
                    </Col>
                    <Col>
                        8
                    </Col>
                    <Col>
                        --
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        S(+/B), Clock Input (TxC, RxC)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        9,12
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
                        I(+/B), Indicator (DSR/DCD)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        10,22
                    </Col>
                    <Col>
                        12
                    </Col>
                    <Col>
                        Input
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        X(+/B), Clock Output (AuxClk)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        11
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
                        T(+/B), Transmit Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        14
                    </Col>
                    <Col>
                        9
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        S(-/A), Clock Input (TxC, RxC)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        15,17
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
                        R(+/B), Receive Data<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        16
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
                        C(-/A), Control (DTR)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        20
                    </Col>
                    <Col>
                        3
                    </Col>
                    <Col>
                        Output
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col> 
                        C(+/B), Control (DTR)<br />
                    </Col>
                    <Col>
                        RS-422/V.11
                    </Col>
                    <Col>
                        23
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
                        X(-/A), Clock Output (AuxClk)<br />
                    </Col>
                    <Col>
                        RS-x21/V.11
                    </Col>
                    <Col>
                        24
                    </Col>
                    <Col>
                        7
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