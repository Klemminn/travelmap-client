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
  const costInt = Number(cost);
  if (costInt === 0) {
    <CostContainer>Free</CostContainer>;
  }
  return (
    <CostContainer>
      {Array.from(Array(costInt)).map((num) => (
        <FaDollarSign key={num} />
      ))}
    </CostContainer>
  );
};

export default Cost;
