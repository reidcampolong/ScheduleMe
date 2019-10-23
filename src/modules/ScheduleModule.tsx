import React from 'react';
import Year from './components/Year';
import styled from 'styled-components';

const ScheduleModule = () => (
  <StyledScheduleModule>
    <Year title="1" />
    <Year title="2" />
    <Year title="3" />
    <Year title="4" />
    <Year title="5" />
  </StyledScheduleModule>
);

const StyledScheduleModule = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default ScheduleModule;
