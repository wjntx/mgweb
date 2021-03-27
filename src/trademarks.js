import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/pc104-small-rohs.jpg';

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
    font-size: 1.5rem;
    font-weight: 600;
}

h5 {
    font-size: 1.25rem;
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
    font-weight: 600;
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

.subNote2 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 5px;
}

.displayImage{
    height:270px;
    width:300px;
   }

a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.text-link {
    font-weight: 500;
}
`;

function trademarks() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Trademarks</h1>
            <hr />
            <br /><h5>Trademark Acknowledgments</h5><br />
            Microsoft Windows®, Microsoft Windows Vista®, Microsoft Windows XP®, Microsoft Windows 7®, Microsoft Windows Server 2003®, Microsoft Windows Server 2008®, Microsoft Windows Server®, Visual Studio®, Visual C++®, Visual C#® and other Microsoft product and service names are trademarks, registered trademarks or trade dress of Microsoft, Inc. or its affiliates in the U.S. and/or other countries.
            <br /><br />
            Borland is a registered trademark of Borland Software Corporation in the United States and other countries.
            <br /><br />
            Cisco is a registered trademark of Cisco Systems, Inc. in the United States and other countries.
            <br /><br />
            IBM is a registered trademark of IBM Corporation in the United States and other countries.
            <br /><br />
            Linux is a registered trademark of Linus Torvalds in the United States and other countries.
            <br /><br />
            MicroGate and SyncLink are registered trademarks of MicroGate Systems in the United States.
            <br /><br />
            All other trademarks or brand names are the property of their respective owners.
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default trademarks;