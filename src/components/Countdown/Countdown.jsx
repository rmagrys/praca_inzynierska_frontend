import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const StyledCoundownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  span {
    padding: 1px;
  }
`;

const StyledSingleValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  margin-right: 5px;
`;

const Countdown = ({ finishDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const target = finishDate;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      setDiff(difference);

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <StyledCoundownContainer>
      {diff > 0 ? (
        <>
          <StyledSingleValueWrapper>
            <span>D:</span>
            <span>{days}</span>
          </StyledSingleValueWrapper>
          <StyledSingleValueWrapper>
            <span>G:</span>
            <span>{hours}</span>
          </StyledSingleValueWrapper>
          <StyledSingleValueWrapper>
            <span>M:</span>
            <span>{minutes}</span>
          </StyledSingleValueWrapper>
          <StyledSingleValueWrapper>
            <span>S:</span>
            <span>{seconds}</span>
          </StyledSingleValueWrapper>
        </>
      ) : (
        <span>Aucja zakończona</span>
      )}
    </StyledCoundownContainer>
  );
};

export default Countdown;
