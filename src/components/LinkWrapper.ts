import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from 'styles';

const LinkWrapper = styled(Link)`
  color: ${Colors.White} !important;
  text-decoration: none !important;
`;

export default LinkWrapper;
