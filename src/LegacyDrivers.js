import React from 'react'
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const HDLCWindows = process.env.PUBLIC_URL + '/Drivers/hdlcsdk.exe';
const HDLCWindowsRTK = process.env.PUBLIC_URL + '/Drivers/hdlcrtk.exe';
const Mgsna = process.env.PUBLIC_URL + '/Drivers/mgsna.exe';
const LegacyLinux = process.env.PUBLIC_URL + '/Drivers/legacy-linux.tar.gz';
const Mgwnet = process.env.PUBLIC_URL + '/Drivers/mgwnet-disk.exe';

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

function LegacyDrivers() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#/synclink">SyncLink® Hardware</Breadcrumb.Item>
            <Breadcrumb.Item active>Legacy Drivers</Breadcrumb.Item>
        </Breadcrumb>
            <h1>Legacy Drivers</h1>
            <hr />
            These legacy drivers and software packages are for older operating systems and adapters that are no longer updated as they have been replaced by newer hardware and/or software.
            <br /><br /><br />
            <ul>
                <li><a href={HDLCWindows} target='_blank' download='hdlcsdk.exe'>HDLC API for Windows SDK (Windows 2000 and prior versions)</a></li>
                <li><a href={HDLCWindowsRTK} target='_blank' download='hdlcrtk.exe'>HDLC API for Windows RTK (Windows 2000 and prior versions)</a></li>
                <li><a href={Mgsna} target='_blank' download='mgsna.exe'>SNA/HIS Server (Windows 2000 and prior versions)</a></li>
                <li><a href={LegacyLinux} target='_blank' download='legacy-linux.tar.gz'>Linux API (kernel versions prior to 2.4)</a></li>
                <li><a href={Mgwnet} target='_blank' download='mgwnet-disk.exe'>SyncLink WAN Adapter Software for Windows (32-bit only)</a></li>
            </ul>
            <br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
           </Styles>
        </React.Fragment>
    );
}

export default LegacyDrivers;