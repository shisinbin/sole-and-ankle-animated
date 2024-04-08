import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  return (
    <Link href='/'>
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};

  display: inline-block;

  @media (prefers-reduced-motion: no-preference) {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-gray-900);
      transform: translateY(3px);
      opacity: 0;
      transition: transform 250ms ease-out, opacity 250ms ease-out,
        height 250ms ease-out;

      ${Link}:hover & {
        opacity: 1;
        transform: translateY(10px);
        height: 4px;
      }
    }
  }
`;

export default Logo;
