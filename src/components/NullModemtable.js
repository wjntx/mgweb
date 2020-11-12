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

export const NullModemtable = () => (
    <React.Fragment>
        <Styles>
            <Container>
                <h2>Synchronous RS-232 Null Modem</h2>
                <hr />
                    <Row>
                        <Col>
                            <b>Clock Source End</b>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            DSR, DCD (Pins 6,8)<br />
                        </Col>
                        <Col>
                            DTR (Pin 20)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            --<br />
                        </Col>
                        <Col>
                            RTS, CTS (Pins 4,5)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DTR (Pin 20)<br />
                        </Col>
                        <Col>
                            DSR, DCD (Pins 6,8)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS, CTS (Pins 4,5)<br />
                        </Col>
                        <Col>
                            --
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxC, RxC, AuxCLK (Pins 15,17,24)<br />
                        </Col>
                        <Col>
                            TxC,RxC (Pins 15,17)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD (Pin 2)<br />
                        </Col>
                        <Col>
                            RxD (Pin 3)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxD (Pin 3)<br />
                        </Col>
                        <Col>
                            TxD (Pin 2)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            Signal Ground (Pin 7)<br />
                        </Col>
                        <Col>
                            Signal Ground (Pin 7)
                        </Col>
                    </Row>
                    <hr />
                    <br /><br />
                </Container>
                <Container>
                <h2>V.35 Null Modem (GT family/PCMCIA)</h2>
                <hr />
                    <Row>
                        <Col>
                            <b>Clock Source End</b>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            DSR, DCD (Pins 6,8)<br />
                        </Col>
                        <Col>
                            DTR (Pin 20)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            --<br />
                        </Col>
                        <Col>
                            RTS, CTS (Pins 4,5)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DTR (Pin 20)<br />
                        </Col>
                        <Col>
                            DSR, DCD (Pins 6,8)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS, CTS (Pins 4,5)<br />
                        </Col>
                        <Col>
                            --
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxC(A), RxC(A), AuxCLK(A) (Pin 15,17,24)<br />
                        </Col>
                        <Col>
                            TxC(A),RxC(A) (Pin 15,17)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxC(B), RxC(B), AUXClk(B) (Pin 12,9,11)<br />
                        </Col>
                        <Col>
                            TxC(B),RxC(B) (Pin 12,9)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD(A) (Pin 2)<br />
                        </Col>
                        <Col>
                            RxD(A) (Pin 3)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD(B) (Pin 14)<br />
                        </Col>
                        <Col>
                            RxD(B) (Pin 16)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxD(A) (Pin 3)<br />
                        </Col>
                        <Col>
                            TxD(A) (Pin 2)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxD(B) (Pin 16)<br />
                        </Col>
                        <Col>
                            TxD(B) (Pin 14)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            Signal Ground (Pin 7)<br />
                        </Col>
                        <Col>
                            Signal Ground (Pin 7)
                        </Col>
                    </Row>
                    <hr />
                    <br /><br />
                </Container>
                <Container>
                <h2>RS-530 Null Modem</h2>
                <hr />
                    <Row>
                        <Col>
                            <b>Clock Source End</b>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            DSR(A), DCD(A) (Pins 6,8)<br />
                        </Col>
                        <Col>
                            DTR(A) (Pin 20)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DSR(B), DCD(B) (Pins 22,10)<br />
                        </Col>
                        <Col>
                            DTR(B) (Pin 23)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            --<br />
                        </Col>
                        <Col>
                            RTS(A), CTS(A) (Pins 4,5)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            --<br />
                        </Col>
                        <Col>
                            RTS(B), CTS(B) (Pins 19,13)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DTR(A) (Pin 20)<br />
                        </Col>
                        <Col>
                            DSR(A), DCD(A) (Pins 6,8)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            DTR(B) (Pin 23)<br />
                        </Col>
                        <Col>
                            DSR(B), DCD(B) (Pins 22,10)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS(A), CTS(A) (Pins 4,5)<br />
                        </Col>
                        <Col>
                            --
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RTS(B), CTS(B) (Pins 19,13)<br />
                        </Col>
                        <Col>
                            --
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxC(A), RxC(A), AUXClk(A) (Pin 15,17,24)<br />
                        </Col>
                        <Col>
                            TxC(A),RxC(A) (Pin 15,17)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxC(B), RxC(B), AUXClk(B) (Pin 12,9,11)<br />
                        </Col>
                        <Col>
                            TxC(B),RxC(B) (Pin 12,9)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD(A) (Pin 2)<br />
                        </Col>
                        <Col>
                            RxD(A) (Pin 3)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            TxD(B) (Pin 14)<br />
                        </Col>
                        <Col>
                            RxD(B) (Pin 16)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxD(A) (Pin 3)<br />
                        </Col>
                        <Col>
                            TxD(A) (Pin 2)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            RxD(B) (Pin 16)<br />
                        </Col>
                        <Col>
                            TxD(B) (Pin 14)
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col> 
                            Signal Ground (Pin 7)<br />
                        </Col>
                        <Col>
                            Signal Ground (Pin 7)
                        </Col>
                    </Row>
                    <hr />
                    <br /><br />
                </Container>
        </Styles>
    </React.Fragment>
)