import Head from "next/head";
import styled from "styled-components";

import EarlyBirdSubscribe from "../components/EarlyBirdSubscribe";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
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
      <title>Atmo</title>
    </Head>
    <Hero>
      <StyledH2>Get your ish together</StyledH2>
      <h3>Fast, Fresh, Now</h3>
      <EarlyBirdSubscribe />
    </Hero>
  </>
);
export default Index;
