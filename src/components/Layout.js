import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const Layout = (props) => (
    <Container>
        <Row>
        <Col md={{ span: 8, offset: 2 }}>{props.children} </Col>
        </Row>
    </Container>
) 