import styled from "styled-components";
import theme from "../styles/_theme";

const Button = styled.button`
  box-shadow: none;
  text-decoration: none;
  min-height: 2rem;
  padding: ${theme.spacing.S} ${theme.spacing.M};
  text-align: center;
  border: ${theme.borderM};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.primaryGreen.n80};

  font-size: ${theme.h4.size};
  font-weight: ${theme.h4.weight};
  color: ${theme.textColor.light};
  cursor: pointer;

  :hover {
    background-color: ${theme.primaryGreen.n70};
    transition: background-color ${theme.timing.base} ease;
  }
  :active {
    outline: 0 !important;
    background-color: ${theme.primaryGreen.n50};
    transition: background-color ${theme.timing.fast} ease;
  }
`;
export default Button;
