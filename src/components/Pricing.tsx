import React from 'react';
import styled from 'styled-components';
import { FaDollarSign } from 'react-icons/fa';

type PricingProps = {
  pricing: string;
};

const PricingContainer = styled.div`
  display: flex;
`;

const Pricing: React.FC<PricingProps> = ({ pricing }) => {
  if (pricing.includes('Free')) {
    return <PricingContainer>{pricing}</PricingContainer>;
  }
  return (
    <PricingContainer>
      {Array.from(Array(pricing.length)).map((num) => (
        <FaDollarSign key={num} />
      ))}
    </PricingContainer>
  );
};

export default Pricing;
