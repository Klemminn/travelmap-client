import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Colors } from 'styles';

const Container = styled.div`
  display: flex;
`;

const LinkContainer = styled.a`
  color: ${Colors.RedActive} !important;
  font-size: 2rem;
  svg {
    margin: 0 1rem;
  }
`;
LinkContainer.defaultProps = {
  target: '_blank',
};

const SocialLinks: React.FC = () => (
  <Container>
    <LinkContainer>
      <FaFacebook />
    </LinkContainer>
    <LinkContainer>
      <FaTwitter />
    </LinkContainer>
    <LinkContainer>
      <FaInstagram />
    </LinkContainer>
  </Container>
);

export default SocialLinks;
