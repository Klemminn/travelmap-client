import React from 'react';

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Colors } from 'styles';

type StyledLinkProps = {
  noDecoration?: boolean;
};

const StyledLink = styled(RouterLink)<StyledLinkProps>`
  ${({ noDecoration }) =>
    noDecoration ? 'text-decoration: none !important;' : ''}
  color: ${Colors.White};
  &:hover {
    color: ${Colors.White};
  }
`;

type LinkProps = {
  label: string;
  link?: string;
  noDecoration?: boolean;
};

const Link: React.FC<LinkProps> = ({ label, link, noDecoration }) =>
  link ? (
    <StyledLink noDecoration={noDecoration} to={link}>
      {label}
    </StyledLink>
  ) : (
    <div>{label}</div>
  );

export default Link;
