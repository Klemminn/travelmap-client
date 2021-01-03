import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

import Link from './Link';

const Container = styled.div`
  display: flex;
`;

const CrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

type Crumb = {
  label: string;
  link?: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <Container>
      {crumbs.map((crumb, idx) => (
        <CrumbContainer>
          <Link {...crumb} />
          {idx < crumbs.length - 1 && <FaChevronRight />}
        </CrumbContainer>
      ))}
    </Container>
  );
};

export default Breadcrumbs;
