import styled from "styled-components";
import Link from "next/link";
import theme from "../styles/_theme";

import SpaceWrapper from "../elements/SpaceWrapper";
import Anchor from "../elements/Anchor";

const Nav = styled.nav`
  position: fixed;
  left: 0;
  z-index: 9;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${theme.neutral.n05};
`;

const Logo = styled(Anchor)`
  font-weight: 600;
`;

const Navbar = () => (
  <Nav>
    <SpaceWrapper width="S" height="S">
      <Link href="/">
        <Logo>Atmo</Logo>
      </Link>
    </SpaceWrapper>
    <SpaceWrapper width="S" height="S">
      <Link href="/about">
        <Anchor>About</Anchor>
      </Link>
    </SpaceWrapper>
  </Nav>
);

export default Navbar;
