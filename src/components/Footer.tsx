import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';

import * as Images from './Images';
import Link from './Link';
import Logo from './Logo';
import * as Text from './Text';

const Container = styled.div`
  position: relative;
  height: 100%;
  color: ${Colors.White};
`;

const Image = styled(Images.Image)`
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
`;

const Subscribe = styled.div``;

const SubscribeTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 1.3rem;
  font-size: 4rem;
`;

const SubscribeText = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.4rem;
  margin-top: 0.7rem;
`;

const BottomContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
  > * {
    flex: 1;
    margin: 0 1rem;
  }
`;

const Social = styled.div``;

const Title = styled.div`
  letter-spacing: 0.4rem;
  border-bottom: 1px solid ${Colors.White};
  text-transform: uppercase;
`;

const TitledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type TitledProps = {
  title: string;
};

const Titled: React.FC<TitledProps> = ({ title, children }) => (
  <TitledContainer>
    <Title>{title}</Title>
    {children}
  </TitledContainer>
);

const TitledContent = styled(Text.Text)`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0.5rem;
  font-size: 0.8rem;
  letter-spacing: 0.5rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Image src="/assets/footer-background.jpg" />
      <Content>
        <Subscribe>
          <SubscribeTitle>Subscribe</SubscribeTitle>
          <SubscribeText>Subscribe to our monthly newsletter</SubscribeText>
        </Subscribe>
        <BottomContainer>
          <Social>
            <Logo />
          </Social>
          <Titled title="Experience">
            <TitledContent>
              <Link link="/tags/northernLights" label="Northern Lights" />
              <Link link="/tags/wildlife" label="Wildlife" />
              <Link link="/tags/iceCaves" label="Ice Caves" />
            </TitledContent>
          </Titled>
          <Titled title="Regions">
            <TitledContent>
              <Link link="/regions/capital" label="Capital & Reykjanes" />
              <Link link="/regions/south" label="South" />
              <Link link="/regions/northEast" label="North-East" />
              <Link link="/regions/northWest" label="North-West" />
              <Link link="/regions/highlands" label="Highlands" />
            </TitledContent>
          </Titled>
          <Titled title="About">
            <TitledContent>
              Just Iceland Things was created in 2020 by a bunch of people. This
              is the only website you will ever need.
              <br />
              Thank you.
            </TitledContent>
          </Titled>
          <Titled title="Contact">
            <TitledContent>
              oddur@egg.com
              <br />
              +354-823-0885
            </TitledContent>
          </Titled>
        </BottomContainer>
      </Content>
      <Copyright>{`© ${currentYear} - JustIcelandThings.com`}</Copyright>
    </Container>
  );
};

export default Footer;
