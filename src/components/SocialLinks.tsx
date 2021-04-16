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

type SocialLinksProps = {
  facebook: string | null;
  twitter: string | null;
  instagram: string | null;
};

const SocialLinks: React.FC<SocialLinksProps> = ({
  facebook,
  twitter,
  instagram,
}) => (
  <Container>
    {facebook && (
      <LinkContainer href={facebook}>
        <FaFacebook />
      </LinkContainer>
    )}
    {twitter && (
      <LinkContainer href={twitter}>
        <FaTwitter />
      </LinkContainer>
    )}
    {instagram && (
      <LinkContainer href={instagram}>
        <FaInstagram />
      </LinkContainer>
    )}
  </Container>
);

export default SocialLinks;
