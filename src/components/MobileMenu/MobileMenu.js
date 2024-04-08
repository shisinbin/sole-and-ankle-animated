/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label='Menu'>
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id='close' />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink
              href='/sale'
              style={{ '--animation-delay': '400ms' }}
            >
              <MainText>Sale</MainText>
              <SkewedText>Sale</SkewedText>
            </NavLink>
            <NavLink
              href='/new'
              style={{ '--animation-delay': '425ms' }}
            >
              <MainText>New&nbsp;Releases</MainText>
              <SkewedText>New&nbsp;Releases</SkewedText>
            </NavLink>
            <NavLink
              href='/men'
              style={{ '--animation-delay': '450ms' }}
            >
              <MainText>Men</MainText>
              <SkewedText>Men</SkewedText>
            </NavLink>
            <NavLink
              href='/women'
              style={{ '--animation-delay': '475ms' }}
            >
              <MainText>Women</MainText>
              <SkewedText>Women</SkewedText>
            </NavLink>
            <NavLink
              href='/kids'
              style={{ '--animation-delay': '500ms' }}
            >
              Kids
            </NavLink>
            <NavLink
              href='/collections'
              style={{ '--animation-delay': '525ms' }}
            >
              Collections
            </NavLink>
          </Nav>
          <Footer>
            <SubLink href='/terms'>Terms and Conditions</SubLink>
            <SubLink href='/privacy'>Privacy Policy</SubLink>
            <SubLink href='/contact'>Contact Us</SubLink>
          </Footer>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0.14, 0.78, 0.36, 1);
    animation-delay: 200ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  /* animation: ${fadeIn} 600ms both;
  animation-delay: 400ms; */
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }

  animation: ${fadeIn} 250ms both ease-in;
  animation-delay: var(--animation-delay);
`;

const MainText = styled.span`
  transition: opacity 300ms;

  ${NavLink}:hover & {
    opacity: 0;
  }
`;

const SkewedText = styled.span`
  position: absolute;
  left: 0;
  transform: scale(1.1) translateX(10px) translateY(-10px)
    rotate(4deg);
  opacity: 0;
  transition: transform 300ms, opacity 300ms;
  /* font-weight: ${WEIGHTS.bold}; */
  color: var(--color-primary);

  ${NavLink}:hover & {
    transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
    opacity: 1;
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;

  animation: ${fadeIn} 500ms both ease-in;
  animation-delay: 750ms;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
