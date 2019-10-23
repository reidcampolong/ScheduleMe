import React from 'react';
import styled from 'styled-components';

interface IClassProps {
  title: string;
}
const Class = ({ title }: IClassProps) => <StyledYear>{title}</StyledYear>;
const StyledYear = styled.div`
  border-style: solid;
  border-color: orange;
  border-width: 1px;
  background-color: orange;

  min-width: 60px;
  min-height: 60px;
  max-width: 60px;
  max-height: 60px;
`;

export default Class;
