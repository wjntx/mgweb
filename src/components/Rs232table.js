import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
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

.bgcolor {
    background-color: grey;
}
`;

export const Rs232table = () => (
    <React.Fragment>
        <Styles>
        <h2>RS-232 DB-25 Male DTE</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Description</th>
                        <th>Electrical Description</th>
                        <th>Pin #</th>
                        <th>Direction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Earth/Shield Ground</td>
                        <td>--</td>
                        <td>1</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>TxD, Transmit Data</td>
                        <td>RS-232/V.28</td>
                        <td>2</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>RxD, Receive Data</td>
                        <td>RS-232/V.28</td>
                        <td>3</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>RTS, Request To Send</td>
                        <td>RS-232/V.28</td>
                        <td>4</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>CTS, Clear To Send</td>
                        <td>RS-232/V.28</td>
                        <td>5</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>DSR, Data Carrier Detect</td>
                        <td>RS-232/V.28</td>
                        <td>6</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>Signal Ground</td>
                        <td>--</td>
                        <td>7</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>DCD, Data Carrier Detect</td>
                        <td>RS-232/V.28</td>
                        <td>8</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>TxC, Transmit Clock</td>
                        <td>RS-232/V.28</td>
                        <td>9</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>RxC, Receive Clock</td>
                        <td>RS-232/V.28</td>
                        <td>17</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>LL, Local Loopback Control</td>
                        <td>RS-232/V.28</td>
                        <td>18</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>DTR, Data Terminal Ready</td>
                        <td>RS-232/V.28</td>
                        <td>20</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>RL, Remote Loopback Control</td>
                        <td>RS-232/V.28</td>
                        <td>21</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>RI, Ring Indicator</td>
                        <td>RS-232/V.28</td>
                        <td>22</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>AuxClk, DTE Clock Output</td>
                        <td>RS-232/V.28</td>
                        <td>24</td>
                        <td>Output</td>
                    </tr>
                </tbody>
            </Table>
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
)