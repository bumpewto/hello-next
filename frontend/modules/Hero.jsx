import { useSpring, animated } from "react-spring";
import styled, { css } from "styled-components";
import SpaceWrapper from "../elements/SpaceWrapper";
import WaitingList from "../components/WaitingList";
import theme from "../styles/_theme";
import Image from "../elements/Image";

const srcset0 = "../static/anton-hero-phone.jpg";
const srcset600 = "../static/anton-hero-tablet.jpg";
const srcset1000 = "../static/anton-hero-desktop.jpg";

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
const AnimatedWaitingList = animated(WaitingList);

const Hero = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Section>
      <Image
        width="100%"
        height="40vh"
        position="50% 50%"
        srcset0={srcset0}
        srcset600={srcset600}
        srcset1000={srcset1000}
        alt="misty land"
      />
      <SpaceWrapper height="XL" width="M" css={media}>
        <animated.h1 style={fade}>Inspiration is vital</animated.h1>
        <animated.h2 style={fade}>Receive fresh breeze from the purest places on Earth</animated.h2>
        <AnimatedWaitingList style={fade} />
      </SpaceWrapper>
    </Section>
  );
};
export default Hero;
