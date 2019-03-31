import Head from "next/head";
import styled from "styled-components";

import Wrapper from "../components/Wrapper";
import EarlyBirdSubscribe from "../components/EarlyBirdSubscribe";

// remplacer grad par img
const Hero = styled.div`
  display; flex;
  
  background: cornflowerblue;
  height: 100vh;
  padding: 6rem 2rem 2rem;
`;

const StyledH2 = styled.h2`
  background: coral;
`;

const Index = () => (
  <>
    <Head>
      <title>AyAyAy</title>
    </Head>
    <Wrapper>
      <Hero>
        <StyledH2>Get your ish together</StyledH2>
        <h3>Fast, Fresh, Now</h3>
        <EarlyBirdSubscribe />
      </Hero>
    </Wrapper>
  </>
);
export default Index;
