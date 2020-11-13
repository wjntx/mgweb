import React from 'react'
import styled from 'styled-components';

import { NullModemtable } from './components/NullModemtable.js';

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

function NullModem() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Null Modem Specifications</h1>
            <hr />
            A Synchronous NULL Modem connects two synchronous serial ports without using a modem or CSU/DSU. The NULL modem wiring depends on the serial interface configuration of the SyncLink adapter: RS-232, V.35, or RS-530.
            <br /><br />
            The following NULL modem cabling requirements are necessary for use with the SyncLink adapter:
            <br /><br />
            <div className="subhead">Data Clocks</div>
            A synchronous NULL modem is different from the asynchronous NULL modem used with standard PC serial (COM) ports. Synchronous communication uses clock signals, which MUST be supplied to both adapters. Usually a modem or CSU/DSU provides the data clocks. When using a NULL modem, one of the adapters must provide data clocks. The SyncLink adapter can generate a clock on the AUX Clock pin of the serial interface. The clock speed is controlled by the adapter software. The NULL modem connects this clock output to the transmit and receive clock inputs on both adapters. The NULL modem must be attached with the Clock Source end to the adapter that is supplying the clock signal.
            <br /><br />
            <div className="subhead">NOTES:</div>
            The NULL modem wiring below connects one clock output to 4 clock inputs.
            <br /><br />
            An RS-232 output should only drive one input. At low speeds (19200 or less) and cable lengths (6 feet or less), the NULL modem below can drive four inputs even though this is not supported by the RS-232 specification. RS-485 allows an output to drive multiple inputs.
            <br /><br />
            For all serial interfaces, driving multiple inputs increases the load on the output, limiting the maximum data rate and cable length. The exact speed and length limits depend on cable construction and input load characteristics of attached devices. Use cables with low capacitive loading for higher speeds.
            <br /><br />
            Custom API applications can route the AUXCLK output internally to the serial controller so the AUXCLK output only needs to be connected to RxC and TxC of the remote end, and NOT the RxC and TxC of the SyncLink end. This reduces the load to two inputs.
            <br /><br />
            For higher data rates and longer cabled, it may be necessary to buy an active (powered) NULL modem from a third party which uses multiple drivers to replicate a clock source for distribution to multiple clock inputs.
            <br /><br />
            <div className="subhead">DCD (Carrier Detect)</div>
            In the tables below, the DCD signal is driven by the DTR signal on the opposite end. In this case, DCD operates as a connection indicator that signals the remote ends readiness. An alternate method of wiring is to drive DCD from the RTS of the opposite side. In this case DCD signals that the remote is transmitting data. The choice of these two setups is application dependant.
            <br /><br />
            In the tables below, each column represents the DB-25 connector pins on one end of the connection. Each row represents connections (wires) between the adapters. All pins listed in a row are connected to each other.
            <br /><br />
            For example: <br />
            In the first row of the RS-232 table, the DSR and DCD signals on the clock source end are tied together AND they are connected to the DTR signal on the remote end.
            <br /><br />
            <NullModemtable />
        </Styles>
        </React.Fragment>
    );
}

export default NullModem;