import styled, { css } from "styled-components";
import SpaceWrapper from "../elements/SpaceWrapper";
import Whitelist from "../components/Whitelist";
import theme from "../styles/_theme";

const Section = styled.section`
  min-height: 100vh;
`;

const media = css`
  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    width: calc(100% * 8 / 12);
    margin-left: 16.66666%;
  }

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: column;
    width: calc(100% * 10 / 12);
    margin-left: 8.33%;
  }
`;

const Hero = () => (
  <Section>
    <SpaceWrapper height="XL" width="M" css={media}>
      <h1>Inspiration is vital</h1>
      <h2>Receive fresh breeze from the purest places on Earth</h2>
      <Whitelist />
    </SpaceWrapper>
  </Section>
);
export default Hero;
