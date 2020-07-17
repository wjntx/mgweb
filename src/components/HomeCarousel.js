import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import styled from 'styled-components';

import slide01 from '../assets/williams.jpg';
import slide02 from '../assets/train.jpg';
import slide03 from '../assets/submarine.jpg';

const Styles = styled.div`
    .right.carousel-control, .left.carousel-control {
        display: none;
    }
`;

export const HomeCarousel = () => (
    <Styles>
        <Carousel fluid className="mb-5 mt-5" controls={false} indicators={false} interval={4000} fade>
            <CarouselItem>
                <img className="d-block w-100" src={slide01} alt="Slide 1: williams" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide02} alt="Slide 1: train" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide03} alt="Slide 1: submarine" />
            </CarouselItem>
        </Carousel>
    </Styles>
)