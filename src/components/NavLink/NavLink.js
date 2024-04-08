import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 500ms;
  transform: translateY(var(--translate-from));

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 250ms;
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default NavLink;
