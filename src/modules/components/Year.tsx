import React, { Fragment } from 'react';
import styled from 'styled-components';
import Class from './Class';

interface IYearProps {
  title: string;
}

const Year = ({ title }: IYearProps) => {
  return (
    <StyledYear>
      {title}
      <StyledRow>
        <Class title="220" />
        <Class title="260" />
      </StyledRow>
      <StyledRow>
        <Class title="220" />
        <Class title="260" />
      </StyledRow>
    </StyledYear>
  );
};

const StyledRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 10px;
`;

const StyledYear = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 1px;

  /*Allow for flexibility*/
  width: 140px;
  height: 400px;
  min-width: 140px;
  min-height: 200px;
`;

export default Year;
