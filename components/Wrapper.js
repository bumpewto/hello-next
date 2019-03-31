import styled from "styled-components";

// import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";

const theme = {
  background: "papayawhip"
};

const StyledRoot = styled.div`
  position: relative;
  overflow: auto;
  box-sizing: border-box;
`;

const Wrapper = props => (
  <StyledRoot>
    {/* <GlobalStyle /> */}
    <Header />
    <Layout>{props.children}</Layout>
    <Footer />
  </StyledRoot>
);
export default Wrapper;
