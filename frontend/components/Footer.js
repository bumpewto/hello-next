import styled from "styled-components";
import Link from "next/link";

import theme from "../styles/_theme";
import SpaceStack from "../elements/SpaceStack";
import Anchor from "../elements/Anchor";
import SpaceWrapper from "../elements/SpaceWrapper";

const Foot = styled.footer`
  margin-top: ${theme.spacing.M};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  text-align: center;

  background: ${theme.neutral.n90};
  color: ${theme.neutral.n05};
`;

const Footer = () => (
  <Foot>
    <SpaceStack top="M" bottom="S">
      <SpaceWrapper width="S" height="XS">
        <Link href="/terms-service">
          <Anchor>Terms of Service</Anchor>
        </Link>
      </SpaceWrapper>
      <SpaceWrapper width="S" height="XS">
        <Link href="/privacy-policy">
          <Anchor>Privacy Policy</Anchor>
        </Link>
      </SpaceWrapper>
    </SpaceStack>
    <SpaceStack top="None" bottom="M">
      <span>Atmo ©</span>
    </SpaceStack>
  </Foot>
);

export default Footer;
