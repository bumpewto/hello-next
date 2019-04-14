import styled from "styled-components";
import Link from "next/link";

import Menu from "./components/Menu";
import Anchor from "../../elements/Anchor";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  z-index: 9;
  width: 100%;

  height: 3rem;
  background: rgba(255, 239, 213, 0.9);
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
`;

const StyledH1 = styled.div`
  font-size: 1rem;
  margin: 0;
`;

const Header = () => (
  <StyledHeader>
    <Navbar>
      <StyledH1>
        <Link href="/">
          <Anchor>Atmo</Anchor>
        </Link>
      </StyledH1>
      <Menu />
    </Navbar>
  </StyledHeader>
);

export default Header;
