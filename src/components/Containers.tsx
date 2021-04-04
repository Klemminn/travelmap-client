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
  height: 100%;
  > div {
    max-width: 1920px;
  }
  background-color: ${Colors.WhiteSmoke};
`;

const PageContentContainer = styled.div`
  padding: 6rem 7rem;
  background-color: ${Colors.White};
`;

type PageContainerProps = {
  header?: JSX.Element;
  headerImage?: Image;
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  header,
  headerImage,
}) => (
  <Container>
    {headerImage && <TopImageContainer image={headerImage} />}
    {header}
    <PageContentContainer>{children}</PageContentContainer>
  </Container>
);
