import React from 'react';
import { Table } from 'react-bootstrap';
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
        <h2 style={{textAlign: "center"}, {color: "black"}}>X.21 Male DTE</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Signal Name</th>
                        <th>Electrical Description</th>
                        <th>DB25 Pin #</th>
                        <th>DB15 Pin #</th>
                        <th>Direction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Earth/Shield Ground</td>
                        <td>--</td>
                        <td>1</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>T(-/A), Transmit Data</td>
                        <td>RS-422/V.11</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>R(-/A), Receive Data</td>
                        <td>RS-422/V.11</td>
                        <td>3</td>
                        <td>4</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>I(-/A), Indicator (DSR/DCD)</td>
                        <td>RS-422/V.11</td>
                        <td>6,8</td>
                        <td>5</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>Signal Ground</td>
                        <td>--</td>
                        <td>7</td>
                        <td>8</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>S(+/B), Clock Input (TxC, RxC)</td>
                        <td>RS-422/V.11</td>
                        <td>9,12</td>
                        <td>13</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>I(+/B), Indicator (DSR/DCD)</td>
                        <td>RS-422/V.11</td>
                        <td>10</td>
                        <td>22</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>X(+/B), Clock Output (AuxClk)</td>
                        <td>RS-422/V.11</td>
                        <td>11</td>
                        <td>14</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>T(+/B), Transmit Data</td>
                        <td>RS-422/V.11</td>
                        <td>14</td>
                        <td>9</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>S(-/A), Clock Input (TxC, RxC)</td>
                        <td>RS-422/V.11</td>
                        <td>15,17</td>
                        <td>6</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>R(+/B), Receive Data</td>
                        <td>RS-422/V.11</td>
                        <td>16</td>
                        <td>11</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>C(-/A), Control (DTR)</td>
                        <td>RS-422/V.11</td>
                        <td>20</td>
                        <td>3</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>C(+/B), Control (DTR)</td>
                        <td>RS-422/V.11</td>
                        <td>23</td>
                        <td>10</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>X(-/A), Clock Output (AuxClk)</td>
                        <td>RS-x21/V.11247Output</td>
                        <td>24</td>
                        <td>7</td>
                        <td>Output</td>
                    </tr>
                </tbody>
            </Table>
        </Styles>
    </React.Fragment>
)