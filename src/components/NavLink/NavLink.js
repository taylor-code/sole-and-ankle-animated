import React from 'react';
import styled from 'styled-components';

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
  color: var(--color-gray-900);
  display: block;
  position: relative;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
  overflow: hidden; /* Text slide-up effect. */
  text-decoration: none;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--translate-to));
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
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export default NavLink;
