import React from 'react';
import styled from 'styled-components';
import { FaDollarSign } from 'react-icons/fa';

type CostProps = {
  cost: string;
};

const CostContainer = styled.div`
  display: flex;
`;

const Cost: React.FC<CostProps> = ({ cost }) => {
  if (cost.includes('Free')) {
    return <CostContainer>{cost}</CostContainer>;
  }
  return (
    <CostContainer>
      {Array.from(Array(cost.length)).map((num) => (
        <FaDollarSign key={num} />
      ))}
    </CostContainer>
  );
};

export default Cost;
