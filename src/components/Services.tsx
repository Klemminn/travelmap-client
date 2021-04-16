import React from 'react';
import styled from 'styled-components';
import { FaCoffee, FaRestroom, FaUtensils } from 'react-icons/fa';

import { Service } from 'types';
import { Colors } from 'styles';

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const iconMap: { [key in Service]: typeof FaCoffee } = {
  coffee: FaCoffee,
  toilet: FaRestroom,
  food: FaUtensils,
};

type ServicesProps = {
  services: Service[];
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  const serviceKeys = Object.keys(iconMap) as Service[];
  return (
    <ServicesContainer>
      {serviceKeys.map((service) => {
        const Icon = styled(iconMap[service])`
          margin: 0 1rem;
          color: ${services.includes(service)
            ? Colors.RedActive
            : Colors.RedInactive};
        `;
        return <Icon />;
      })}
    </ServicesContainer>
  );
};

export default Services;
