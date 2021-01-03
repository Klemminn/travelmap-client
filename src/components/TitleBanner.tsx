import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';

const TITLE_SIZE = 4;

const Container = styled.div`
  color: ${Colors.White};
  background-color: ${Colors.BlueDark};
  margin-top: -${TITLE_SIZE + 6}rem;
  position: absolute;
  padding: 0.4rem 4rem 0.4rem 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
`;

const Title = styled.div`
  font-size: ${TITLE_SIZE}rem;
  letter-spacing: 1.2rem;
  line-height: 1.3;
`;

type TitleBannerProps = {
  title: string;
};

const TitleBanner: React.FC<TitleBannerProps> = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default TitleBanner;
