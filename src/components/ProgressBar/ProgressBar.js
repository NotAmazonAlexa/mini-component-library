/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHTS = {
  small: '8px',
  medium: '12px',
  large: '24px',
};

const RADIUS = {
  small: '4px',
  medium: '4px',
  large: '8px',
};

const ProgressBar = ({ value, size }) => {

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        '--height': HEIGHTS[size],
        '--radius': RADIUS[size],
        '--padding': size === 'large' ? '4px' : 0,

      }}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{
        '--width': value + '%',
        '--right-radius': value === 100 ? RADIUS[size] : 0,
        '--bar-height': size === 'large' ? '16px' : HEIGHTS[size],
      }}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
    padding: var(--padding);

`;

const Bar = styled.div`
  width: var(--width);
  height: var(--bar-height);
  border-radius: var(--radius) var(--right-radius) var(--right-radius) var(--radius);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
