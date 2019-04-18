import styled from "styled-components";
import SpaceWrapper from "../elements/SpaceWrapper";
import Whitelist from "../components/Whitelist";

const Hero = () => (
  <SpaceWrapper height="L" width="M">
    <h1>Inspiration is vital</h1>
    <h2>Receive fresh breeze from the purest places on Earth</h2>
    <Whitelist />
  </SpaceWrapper>
);
export default Hero;
