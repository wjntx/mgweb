import React from 'react'
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import MGE from './PDF/MGEnvironmentalInformation2020.pdf';

import { Substancetable } from './components/Substancetable.js';

import image1  from './assets/REACH.png';
import image2  from './assets/RoHS.png';
import image3  from './assets/CA65.png';

import HDLCWindows from './Drivers/hdlcsdk.exe';
import HDLCWindowsRTK from './Drivers/hdlcrtk.exe';
import Mgsna from './Drivers/mgsna.exe';
import LegacyLinux from './Drivers/legacy-linux.tar.gz';
import Mgwnet from './Drivers/mgwnet-disk.exe';
import { Link } from 'react-router-dom';
import Linking from 'react';

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

.displayImage{
    height:81px;
    width:112px;
    padding-bottom: 0px;
   }

.displayImage2{
    height:81px;
    width:98px;
    padding-bottom: 0px;
   }

   .displayImage3{
    height:119px;
    width:130px;
    padding-bottom: 0px;
   }
`;

const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

function Enviornmental() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Enviornmental Information</h1>
            <hr />
            <br /> <h5>Statement on Enviormental information</h5><br />
            This information outlines MicroGate Systems LTD (MicroGate) current understanding of obligations for communication of multiple environmental directives and regulations pertaining to articles and components MicroGate supplies and disclosure of MicroGate’s actions to appropriately address such requirements.
            <br /><br />
            <a href={MGE} target="_blank" rel="noopener noreferrer">Download Compliance Statement (PDF).</a>
            <br /><br />
            <Image src={image1} rounded className="float-left rounded displayImage" />
            <h5>Statement on Enviormental information</h5>
            MicroGate certifies SyncLink products are REACH compliant under the definition of the REACH regulations EC1907/2006. REACH requires suppliers to inform recipients if a product contains a Substance of Very High Concern (SVHC) in excess of 0.1% by weight. SyncLink adapters have no known uses of any of the SVHC listed, as part of the latest 205 substances and updated by ECHA on January 16, 2020, above the 0.1% regulatory threshold. Chemical intermediaries used in manufacturing are not considered applicable. Please refer to the following ECHA list for the most current candidate list of substance: 
            <a href="http://echa.europa.eu/candidate-list-table"> http://echa.europa.eu/candidate-list-table.</a>
            <br /><br />
            <Image src={image2} rounded className="float-left rounded displayImage2" />
            <h5>Statement of RoHS Compliance</h5>
            The EU RoHS3 rules are designed to restrict the use of certain hazardous materials in the manufacture of various types of electronic and electrical equipment. MicroGate is fully aware of these rules and monitors the latest developments in legislation and official implementation guidance.
            <br /><br />
            MicroGate certifies the SyncLink products as lead-free and are in compliance with European Union Directive (RoHS Directive), 2011/65/EU (RoHS2 Directive), and 2015/863/EU (RoHS3 Directive) of the European Parliament with respect to the following substances:
            <br /><br />
            <Substancetable />
            MicroGate SyncLink products are compliant with the current RoHS requirement that the maximum concentration values of the ten(10) substances listed in the RoHS Annex II do not exceed 0.1% by weight in homogeneous materials.
            <br /><br />
            <Image src={image3} rounded className="float-left rounded displayImage3" />
            <h5>Statement on California Proposition 65</h5>
            California Proposition 65 requires businesses to provide warnings to Californians about significant exposures to chemicals that cause certain harm. These chemicals can be in the products that Californians purchase, in their homes or workplaces, or that are released into the environment. By requiring that this information be provided, Proposition 65 enables Californians to make informed decisions about their exposures to these chemicals.
            <br /><br />
            MicroGate products are not intended to expose users to, release or discharge chemicals on the Proposition 65 List in normal product use and do not carry a Proposition 65 warning. MicroGate takes reasonable steps to obtain information about product content from third party suppliers to comply with warning requirements.
            <br /><br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
           </Styles>
        </React.Fragment>
    );
}

export default Enviornmental;