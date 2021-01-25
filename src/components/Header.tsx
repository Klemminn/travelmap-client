import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Logo from './Logo';
import { Colors } from 'styles';
import { Link } from 'components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  top: 1rem;
  width: 100%;
  position: absolute;
  color: ${Colors.White};
  text-transform: uppercase;
`;

const HeaderLogo = styled(Logo)`
  margin: 0 5rem;
`;

const SectionsContainer = styled.div`
  display: flex;
  width: 50%;
  margin-right: 5rem;
  justify-content: space-around;
`;

type SectionProps = {
  selected: boolean;
};

const Section = styled.div<SectionProps>`
  font-size: 1.8rem;
  border-bottom: ${({ selected }) =>
    `0.3rem solid ${selected ? Colors.White : 'transparent'}`};
  &:hover {
    border-bottom: 0.3rem solid ${Colors.GreyDark};
  }
`;

const sections = [
  {
    title: 'Map',
    route: '/map',
  },
  {
    title: 'Regions',
    route: '/places',
  },
  {
    title: 'Experience',
    route: '/experience',
  },
  {
    title: 'Blog',
    route: '/blog',
  },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderLogo />
      <SectionsContainer>
        {sections.map((section) => (
          <Section
            key={section.route}
            selected={location.pathname.startsWith(section.route)}
          >
            <Link label={section.title} link={section.route} noDecoration />
          </Section>
        ))}
      </SectionsContainer>
    </HeaderContainer>
  );
};

export default Header;
