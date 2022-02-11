import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>

    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>

      <StyledSelect>
        {displayedValue}
        <Icon  id="chevron-down" size={24} strokeWidth={1}/>
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const StyledSelect = styled.div`
  height: 42px;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  display: flex;
  justify-content: space-between;
  line-height: 42px;
  align-items: center;
  gap: 24px;
  color: ${COLORS.gray700};
  
  &:hover {
    color: black;
  }
  
  &:focus {
   border: 1px solid ${COLORS.primary};
  }
`;

export default Select;
