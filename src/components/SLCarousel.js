import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import styled from 'styled-components';

import slide01 from '../assets/USB.jpg';

const Styles = styled.div`
.carousel-item > img { 
    width: 20%;
  }
`;

export const SLCarousel = () => (
    <Styles>
        <Carousel fluid className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded" controls={false} indicators={false} interval={4000} fade>
            <CarouselItem>
                <img className="d-block" src={slide01} alt="Slide 1: USB" />
            </CarouselItem>
        </Carousel>
    </Styles>
)