import styled from "styled-components";

const Button = styled.Button`
  text-decoration: none;
  min-height: 2rem;
  margin: ${theme.spacingXS} ${theme.spacingS};
  text-align: center;
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  color: ${theme.textColor.light};
  background-color: ${theme.primaryGreen.n80};
  cursor: pointer;

  :hover {
    background-color: ${theme.primaryGreen.n70};
    transition: background-color ${theme.timing.base} ease;
  }
  :active {
    background-color: ${theme.primaryGreen.n50};
    transition: background-color ${theme.timing.fast} ease;
  }
`;
export default Button;
