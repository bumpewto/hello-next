import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  box-sizing: border-box;
  margin: 1rem 1rem 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  text-align: center;
`;

const A = styled.a`
  margin 1rem;
`;

const Span = styled.span`
  margin 1rem;
`;

const Footer = () => (
  <StyledFooter>
    <Div>
      <Link href="/terms-service">
        <A>Terms of Service</A>
      </Link>
      <Link href="/privacy-policy">
        <A>Privacy Policy</A>
      </Link>
      <Span>Atmo ©</Span>
    </Div>
  </StyledFooter>
);

export default Footer;
//
