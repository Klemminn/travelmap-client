import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Colors } from 'styles';

const StyledCarousel = styled(CarouselProvider)`
  display: flex;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  button {
    font-size: 2rem;
    display: flex;
    height: 100%;
    align-items: center;
    background: none;
    border-color: transparent;
    color: ${Colors.White};
    &:focus {
      outline: 0;
    }
  }
`;

type CarouselProps = {
  maxVisibleSlides?: number;
  items: JSX.Element[];
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  maxVisibleSlides = 4,
  ...rest
}) => {
  const visibleSlides =
    items.length < maxVisibleSlides ? items.length : maxVisibleSlides;
  return (
    <StyledCarousel
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      isIntrinsicHeight
      totalSlides={items.length}
      visibleSlides={visibleSlides}
      step={visibleSlides}
      infinite
      {...rest}
    >
      <ButtonContainer>
        <ButtonBack>
          <FaArrowCircleLeft />
        </ButtonBack>
      </ButtonContainer>
      <Slider>
        {items.map((item, idx) => (
          <Slide key={idx} index={idx}>
            <SlideContainer>{item}</SlideContainer>
          </Slide>
        ))}
      </Slider>
      <ButtonContainer>
        <ButtonNext>
          <FaArrowCircleRight />
        </ButtonNext>
      </ButtonContainer>
    </StyledCarousel>
  );
};

export default Carousel;
