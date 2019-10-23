import React, { Fragment } from 'react';
import styled from 'styled-components';

interface IYearProps {
  title: string;
}

const Year = ({ title }: IYearProps) => {
  return <StyledYear>{title}</StyledYear>;
};

const StyledYear = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 1px;

  /*Allow for flexibility*/
  width: 200px;
  height: 400px;
  min-width: 100px;
  min-height: 200px;
`;

export default Year;
