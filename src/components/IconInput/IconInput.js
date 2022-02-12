import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHTS = {
  large: 36/16 + 'rem',
  small: 24/16 + 'rem',
};

const FONT_SIZE = {
  large: 18/16 + 'rem',
  small: 14/16 + 'rem',
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  return (
    <Wrapper style={{
      '--font-size': FONT_SIZE[size],
      '--height': HEIGHTS[size],

    }}>
      <VisuallyHidden>{label}</VisuallyHidden>

      <IconWrapper>
        <Icon id={icon} />
      </IconWrapper>

      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
        }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  
  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 36px;
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

`;

export default IconInput;
