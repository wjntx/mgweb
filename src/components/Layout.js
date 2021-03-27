import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`;

export const Layout = (props) => (
    <Styles>
        <Container>
            <Row>
            <Col md={{ span: 12, offset: 0 }}>
                    {props.children}
            </Col>
            </Row>
        </Container>
    </Styles>
) 