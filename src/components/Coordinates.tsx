import React from 'react';
import styled from 'styled-components';

const Container = styled.span``;

type CoordinatesProps = {
  latitude: number;
  longitude: number;
};

const round = (num: number, precision: number = 2) =>
  Math.round(num * 10 ** precision) / 10 ** precision;

const Coordinates: React.FC<CoordinatesProps> = ({ latitude, longitude }) => (
  <Container>{`Coordinates: ${round(latitude, 8)}, ${round(
    longitude,
    8,
  )}`}</Container>
);

export default Coordinates;
