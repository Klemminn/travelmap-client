import styled from 'styled-components';

export const Text = styled.div`
  font-size: 1.2rem;
  text-align: justify;
  font-family: 'Quattrocento', serif;
`;

export const Description = styled(Text)`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Information = styled(Text)`
  font-size: 1.3rem;
  font-weight: 300;
`;

export const Caption = styled(Text)``;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`;
