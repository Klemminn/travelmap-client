import styled from 'styled-components';
import { Colors } from 'styles';

const MARGIN = '1.2rem';

const TitleTwoLines = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 1rem 0;

  &:before,
  &:after {
    background-color: ${Colors.Black};
    content: '';
    display: inline-block;
    height: 0.15rem;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: ${MARGIN};
    margin-left: -50%;
  }

  &:after {
    left: ${MARGIN};
    margin-right: -50%;
  }
`;

export default TitleTwoLines;
