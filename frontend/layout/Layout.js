import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const StyledRoot = styled.div`
  position: relative;
  overflow: auto;
  box-sizing: border-box;
`;

const Layout = props => (
  <StyledRoot>
    <Header />
    <section>{props.children}</section>
    <Footer />
  </StyledRoot>
);
export default Layout;
