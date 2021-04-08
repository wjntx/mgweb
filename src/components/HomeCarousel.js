import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import styled from 'styled-components';

import slide01 from '../assets/williams.jpg';
import slide02 from '../assets/falcon9launch.jpg';
import slide03 from '../assets/submarine.jpg';
import slide04 from '../assets/computerroom.jpg';
import slide05 from '../assets/ems.jpg';
import slide06 from '../assets/train.jpg';
import slide07 from '../assets/finance.jpg';
import slide08 from '../assets/plant.jpg';
import slide09 from '../assets/predator.jpg';
import slide10 from '../assets/radar.jpg';
import slide11 from '../assets/sat1.jpg';
import slide12 from '../assets/ship.jpg';
import slide13 from '../assets/shipyard.jpg';

const Styles = styled.div`
.hc {
    max-width: 65%;
}
`;

export const HomeCarousel = () => (
    <Styles>
        <div align="center"><Carousel fluid className="mb-3 mt-3 shadow p-2 mb-4 bg-white rounded hc" controls={false} indicators={false} interval={4000} fade>
            <CarouselItem>
                <img className="d-block w-100" src={slide01} alt="Slide 1: Williams Race Car" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide02} alt="Slide 2: Falcon 9 Launch" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide03} alt="Slide 3: Submarine" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide04} alt="Slide 4: Computer room" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide05} alt="Slide 5: Ambulance" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide06} alt="Slide 6: Train" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide07} alt="Slide 7: Finance Stock Ticker" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide08} alt="Slide 8: plant" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide09} alt="Slide 9: Predator Drone" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide10} alt="Slide 10: Radar" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide11} alt="Slide 11: Satalite" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide12} alt="Slide 12: Ship" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100" src={slide13} alt="Slide 13: Shipyard" />
            </CarouselItem>
        </Carousel></div>
    </Styles>
)