import styled from "styled-components";
import theme from "../styles/_theme";

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: ${theme.primaryGreen.n30};
    transition: background-color ${theme.timing.base} ease;
  }
  :active {
    background-color: ${theme.primaryGreen.n50};
    transition: background-color ${theme.timing.fast} ease;
  }
`;
export default Anchor;
