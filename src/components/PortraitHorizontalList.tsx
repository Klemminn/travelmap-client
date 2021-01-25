import React from 'react';
import styled from 'styled-components';

import { Colors } from 'styles';
import * as Images from './Images';
import { Image } from 'types';
import LinkWrapper from './LinkWrapper';
import Carousel from './Carousel';

const Container = styled.div`
  // To disregard the parents padding, we need the width to be double the padding
  min-width: calc(100% + 14rem);
  padding: 2rem 7rem 1rem 7rem;
  margin-left: -7rem;
  background-color: ${Colors.BlueSolid};
  color: ${Colors.White};
  text-transform: uppercase;
`;

const ListTitle = styled.div`
  font-size: 2rem;
`;

const HorizontalListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PortraitContainer = styled(LinkWrapper)`
  position: relative;
  cursor: pointer;
`;

const PortraitImage = styled(Images.FullWidthImage)``;

const PortraitTitleContainer = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 0.6rem;
  text-shadow: 1px 2px ${Colors.GreyDark};
`;

const PortraitTitle = styled.div`
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
`;

const PortraitSubtitle = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
`;

type ListItem = {
  title: string;
  subtitle?: JSX.Element | JSX.Element[];
  image: Image;
  route: string;
};

type PortraitHorizontalListProps = {
  title: string;
  items: ListItem[];
};

const PortraitHorizontalList: React.FC<PortraitHorizontalListProps> = ({
  items,
  title,
}) => (
  <Container>
    <ListTitle>{title}</ListTitle>
    <HorizontalListContainer>
      <Carousel
        items={items.map((item) => (
          <PortraitContainer key={item.title} to={item.route}>
            <PortraitImage src={item.image.url} />
            <PortraitTitleContainer>
              <PortraitTitle>{item.title}</PortraitTitle>
              {item.subtitle && (
                <PortraitSubtitle>{item.subtitle}</PortraitSubtitle>
              )}
            </PortraitTitleContainer>
          </PortraitContainer>
        ))}
      />
    </HorizontalListContainer>
  </Container>
);

export default PortraitHorizontalList;
