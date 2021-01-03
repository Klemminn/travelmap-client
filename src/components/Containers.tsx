import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';

const Container = styled.div``;

const TopImage = styled.img`
  width: 100%;
`;

type ImageContainerProps = {
  imageSrc: string;
};

export const TopImageContainer: React.FC<ImageContainerProps> = ({
  imageSrc,
}) => (
  <Container>
    <TopImage src={imageSrc} />
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
  topImageSrc: string;
};

const PageContentContainer = styled.div`
  padding: 6rem 7rem;
  background-color: ${Colors.White};
`;

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  topImageSrc,
}) => (
  <Container>
    <TopImageContainer imageSrc={topImageSrc} />
    <PageContentContainer>{children}</PageContentContainer>
  </Container>
);
