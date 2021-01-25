import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';
import { Image } from 'types';

const Container = styled.div``;

const TopImage = styled.img`
  width: 100%;
  min-height: 0.45vw;
`;

type ImageContainerProps = {
  image: Image;
};

export const TopImageContainer: React.FC<ImageContainerProps> = ({ image }) => (
  <Container>
    <TopImage src={image.url} alt={image.alt} />
  </Container>
);

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    max-width: 1920px;
    width: 100%;
  }
  background-color: ${Colors.WhiteSmoke};
`;

type PageContainerProps = {
  image: Image;
};

const PageContentContainer = styled.div`
  padding: 6rem 7rem;
  background-color: ${Colors.White};
`;

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  image,
}) => (
  <Container>
    <TopImageContainer image={image} />
    <PageContentContainer>{children}</PageContentContainer>
  </Container>
);
