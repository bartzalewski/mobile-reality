import React from 'react';
import styled from 'styled-components';
import HouseSummary from './HouseSummary';

const StyledContainer = styled.ul``;

export default function HouseList({ houses }) {
  return (
    <StyledContainer>
      {houses &&
        houses.map((house) => {
          return <HouseSummary house={house} key={house} />;
        })}
    </StyledContainer>
  );
}
