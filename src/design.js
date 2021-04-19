import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/designWEB.jpg';

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

.subNote2 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 5px;
}

.displayImage{
    max-width: 100%;
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

function design() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Design/Manufacturing Services</h1>
            <hr />
            <Image src={image1} rounded className="float-right mb-3 mt-3 ml-3 shadow p-2 mb-4 bg-white rounded displayImage" />
            <br /><h5>Design and Manufacturing Capabilities.</h5><br />
            Our technology team is a premier services provider for clients in all industries providing custom solutions that enable clients to achieve competitive advantage and cost savings. We strive to make effective use of a wide range of standard components, custom controllers, innovative technologies and current assets for outstanding solution design and delivery. In the end, we achieve the optimum balance of cost and performance.
            <br /><br />
            We offer state-of-the-art PCB design and assembly services. Our product development capabilities range from design concept through prototype, compliance testing and manufacturing saving clients on time-to-market, manpower and ultimately overall costs.
            <br /><br />
            MicroGate’s goal is to satisfy our clients by helping them rapidly gain competitive advantage through proven solutions. We consider all process technologies as potential options, and together with you, select the best choice for your requirements.
            <br /><br />
            In today’s ever increasing competitive global environments, the push toward highly-flexible complex systems has created the need for comprehensive solutions. MicroGate is the customer-centric organization partners turn to for success. We turn ideas into solutions.
            <br /><br />
            Contact us to discuss any of your design or manufacturing needs at +1.512.345.7791 or by email at info@microgate.com.
            <br /><br />
            <h3>"Customer Driven, by Design"</h3>
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default design;