import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCoundownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 2px;
  span {
    padding: 1px;
  }
  border: 1px solid var(--blackChocolate);
  border-radius: 5px;
`;

const StyledSingleValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column wrap;
`;

const Countdown = ({ finishDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = finishDate;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

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
      <StyledSingleValueWrapper>
        <span>Dni</span>
        <span>{days}</span>
      </StyledSingleValueWrapper>
      <StyledSingleValueWrapper>
        <span>Godziny</span>
        <span>{hours}</span>
      </StyledSingleValueWrapper>
      <StyledSingleValueWrapper>
        <span>Minuty</span>
        <span>{minutes}</span>
      </StyledSingleValueWrapper>
      <StyledSingleValueWrapper>
        <span>Sekundy</span>
        <span>{seconds}</span>
      </StyledSingleValueWrapper>
    </StyledCoundownContainer>
  );
};

export default Countdown;
