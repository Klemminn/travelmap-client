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
import {
  FaChevronLeft as LeftIcon,
  FaChevronRight as RightIcon,
  FaArrowAltCircleRight as ActionIcon,
} from 'react-icons/fa';

import { Colors } from 'styles';
import { HeaderPage } from 'types';
import { TopImageContainer } from './Containers';

import LinkWrapper from './LinkWrapper';

const StyledCarousel = styled(CarouselProvider)`
  display: flex;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled(LinkWrapper)`
  position: absolute;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.White};
  text-transform: uppercase;
  text-shadow: 1px 2px ${Colors.Black};
  letter-spacing: 0.3rem;
`;

const PageType = styled.div`
  font-size: 1.5rem;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const Subtitle = styled.div`
  font-size: 2rem;
`;

const CallToAction = styled.div`
  margin-top: 3rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const CallToActionIcon = styled(ActionIcon)`
  margin-left: 2rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  height: 100%;
  z-index: 2;
  button {
    font-size: 5rem;
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

const buttonPadding = '10%';

const LeftButtonContainer = styled(ButtonContainer)`
  left: ${buttonPadding};
`;
const RightButtonContainer = styled(ButtonContainer)`
  right: ${buttonPadding};
`;

type CarouselProps = {
  items: HeaderPage[];
};

const HeaderCarousel: React.FC<CarouselProps> = ({ items, ...rest }) => (
  <StyledCarousel
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    isIntrinsicHeight
    totalSlides={items.length}
    visibleSlides={1}
    step={1}
    infinite
    {...rest}
  >
    <LeftButtonContainer>
      <ButtonBack>
        <LeftIcon />
      </ButtonBack>
    </LeftButtonContainer>
    <Slider>
      {items.map((item, idx) => (
        <Slide key={idx} index={idx}>
          <SlideContainer>
            <TopImageContainer
              image={{ url: item.headerImage, alt: '', width: 0, height: 0 }}
            />
            <InfoContainer to={`/${item.pageType.toLowerCase()}/${item.slug}`}>
              <PageType>{item.pageType}</PageType>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <CallToAction>
                Read more
                <CallToActionIcon />
              </CallToAction>
            </InfoContainer>
          </SlideContainer>
        </Slide>
      ))}
    </Slider>
    <RightButtonContainer>
      <ButtonNext>
        <RightIcon />
      </ButtonNext>
    </RightButtonContainer>
  </StyledCarousel>
);

export default HeaderCarousel;
