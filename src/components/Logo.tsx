import React from 'react';
import styled from 'styled-components';

import LinkWrapper from './LinkWrapper';

const Text = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const TopText = styled(Text)``;

const MiddleText = styled(Text)`
  font-size: 2.3rem;
  line-height: 2rem;
`;

const BottomText = styled(Text)`
  text-align: right;
`;

const Logo: React.FC = ({ ...rest }) => (
  <LinkWrapper to="/" {...rest}>
    <TopText>Just</TopText>
    <MiddleText>Iceland</MiddleText>
    <BottomText>Things</BottomText>
  </LinkWrapper>
);

export default Logo;
