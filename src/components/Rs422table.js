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

export const Rs422table = () => (
    <React.Fragment>
        <Styles>
        <h2 style={{textAlign: "center"}, {color: "black"}}>RS‐422/RS‐530/RS‐449 Male DTE</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Signal Name</th>
                        <th>Electrical Description</th>
                        <th>DB25M RS-530 Pin #</th>
                        <th>V.35 Block Pin #</th>
                        <th>Direction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Earth/Shield Ground</td>
                        <td>--</td>
                        <td>1</td>
                        <td>1</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>TxD (-/A), Transmit Data</td>
                        <td>RS-422/V.11</td>
                        <td>2</td>
                        <td>4</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>RxD (-/A), Receive Data</td>
                        <td>RS-422/V.11</td>
                        <td>3</td>
                        <td>6</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>RTS (-/A), Request To Send</td>
                        <td>RS-422/V.11</td>
                        <td>4</td>
                        <td>7</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>CTS (-/A), Clear To Send</td>
                        <td>RS-422/V.11</td>
                        <td>5</td>
                        <td>9</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>DSR (-/A), Data Set Ready</td>
                        <td>RS-422/V.11</td>
                        <td>6</td>
                        <td>11</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>Signal Ground</td>
                        <td>--</td>
                        <td>7</td>
                        <td>19</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>DCD (-/A), Data Carrier Detect</td>
                        <td>RS-422/V.11</td>
                        <td>8</td>
                        <td>13</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>RxC (+/B), Receive Clock</td>
                        <td>RS-422/V.11</td>
                        <td>9</td>
                        <td>26</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>DCD (+/B), Data Carrier Detect</td>
                        <td>RS-422/V.11</td>
                        <td>10</td>
                        <td>31</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>AuxClk (+/B), DTE Clock Output</td>
                        <td>RS-422/V.11</td>
                        <td>11</td>
                        <td>35</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>TxC (+/B) Transmit Clock</td>
                        <td>RS-422/V.11</td>
                        <td>12</td>
                        <td>23</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>CTS (+/B), Clear To Send</td>
                        <td>RS-422/V.11</td>
                        <td>13</td>
                        <td>27</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>TxD (+/B), Transmit Data</td>
                        <td>RS-422/V.11</td>
                        <td>14</td>
                        <td>22</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>TxC (-/A), Transmit Clock</td>
                        <td>RS-422/V.11</td>
                        <td>15</td>
                        <td>5</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>RxD (+/B), Receive Data</td>
                        <td>RS-422/V.11</td>
                        <td>16</td>
                        <td>24</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>RxC (-/A), Receive Clock</td>
                        <td>RS-422/V.11</td>
                        <td>17</td>
                        <td>8</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>LL, Local Loopback Control</td>
                        <td>RS-232/V.28</td>
                        <td>18</td>
                        <td>10</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>RTS, (+/B), Request To Send</td>
                        <td>RS-422/V.11</td>
                        <td>19</td>
                        <td>25</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>DTR (-/A), Data Terminal Ready</td>
                        <td>RS-422/V.11</td>
                        <td>20</td>
                        <td>12</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>RL, Remote Loopback Control</td>
                        <td>RS-232/V.28</td>
                        <td>21</td>
                        <td>14</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>DSR (+/B), Data Set Ready</td>
                        <td>RS-422/V.11</td>
                        <td>22</td>
                        <td>29</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>DTR (+/B), Data Terminal Ready</td>
                        <td>RS-422/V.11</td>
                        <td>23</td>
                        <td>30</td>
                        <td>Output</td>
                    </tr>
                    <tr>
                        <td>AuxClk (-/A), DTE Clock Output</td>
                        <td>RS-422/V.11</td>
                        <td>24</td>
                        <td>17</td>
                        <td>Output</td>
                    </tr>
                </tbody>
            </Table>
        </Styles>
    </React.Fragment>
)