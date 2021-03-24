import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import HDLCWindows from './Drivers/hdlcsdk.exe';
import HDLCWindowsRTK from './Drivers/hdlcrtk.exe';
import Mgsna from './Drivers/mgsna.exe';
import LegacyLinux from './Drivers/legacy-linux.tar.gz';
import Mgwnet from './Drivers/mgwnet-disk.exe';

const Styles = styled.div`
h1 {
    font-size: 2rem;
}

h3 {
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
    font-size: 1.05rem;
    font-weight: 620;
}

hr {
    padding: 0;
}

.subNote {
    font-weight: 300;
    font-size: .85rem;
    font-style: italic;
}

a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}
`;

function Sales() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Sales</h1>
            <hr />
            <br /> <h5>Ordering Information</h5><br />
            To place an order or to obtain information on a MicroGate product, please contact us.
            <br /><br />
            <Container>
                <Row>
                    <Col>
                    <div className="subhead2">United States Sales:</div>
                    512.345.7791 <br /><br />
                    <div className="subhead2">International Sales:</div>
                    +1.512.345.7791 <br /><br />
                    <div className="subhead2"></div>Web: <br />
                    microgate.com <br /><br />
                    <div className="subhead2"></div>E-Mail: <br />
                    sales@microgate.com <br />
                    </Col>
                    <Col>
                    <div className="subhead2">Government Sales:</div>
                    512.345.7791<br /><br />
                    <div className="subhead2">CAGE Code:</div>
                    67ZW9<br /><br />
                    Environmental Information (click here).<br /><br />
                    DFARS compliance information (click here).<br />
                    </Col>
                    <Col>
                    <div className="subhead2">Physical Address:</div>
                    MicroGate Systems, Ltd<br />
                    13284 Pond Springs Road, #102<br />
                    Austin, Texas 78729<br /><br />
                    <div className="subhead2">Remittance/Mailing Address:</div>
                    MicroGate Systems, Ltd<br />
                    PO Box 203306<br />
                    Austin, Texas 78720<br />
                    </Col>
                </Row>
            </Container>
            <br /><br />
            We have knowledgeable representatives available to take your order or answer any questions. Payment terms are prepaid, C.O.D., American Express, Discover, Visa or MasterCard. Net terms are available with approved credit. In most cases, orders will be shipped the same day.
            <br /><br /><br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
           </Styles>
        </React.Fragment>
    );
}

export default Sales;