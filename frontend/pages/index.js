import styled from "styled-components";

// import Layout from "../layout/Layout";
// import EarlyBirdSubscribe from "../components/EarlyBirdSubscribe";

// const StyledH2 = styled.h2`
//   background: coral;
// `;

// const Index = () => (
//   <Layout
//     title="Atmo"
//     hero={
//       <>
//         <StyledH2>Get your ish together</StyledH2>
//         <h3>Fast, Fresh, Now</h3>
//         <EarlyBirdSubscribe />
//       </>
//     }
//   />
// );

import Layout from "../modules/Layout";
import Hero from "../modules/Hero";

const Index = () => (
  <Layout title="Atmo - Inspiration is vital">
    <Hero />
  </Layout>
);
export default Index;
