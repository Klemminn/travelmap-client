import React from 'react';

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Colors } from 'styles';

type StyledLinkProps = {
  plain?: number;
};

const StyledLink = styled(RouterLink)<StyledLinkProps>`
  ${({ plain }) => (plain ? 'text-decoration: none !important;' : '')}
  color: ${Colors.White};
  &:hover {
    color: ${Colors.White};
  }
`;

type LinkProps = {
  label: string;
  link?: string;
  plain?: boolean;
};

const Link: React.FC<LinkProps> = ({ label, link, plain }) =>
  link ? (
    <StyledLink plain={plain ? 1 : 0} to={link}>
      {label}
    </StyledLink>
  ) : (
    <div>{label}</div>
  );

export default Link;
