import styled from "styled-components";

import Header from "./header/Header";
import Footer from "./Footer";

const StyledRoot = styled.div`
  position: relative;
  overflow: auto;
  box-sizing: border-box;
`;

const Shell = props => (
  <StyledRoot>
    <Header />
    <section>{props.children}</section>
    <Footer />
  </StyledRoot>
);
export default Shell;
