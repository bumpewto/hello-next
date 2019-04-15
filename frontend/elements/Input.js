import styled from "styled-components";

const Input = styled.input`
  min-height: 2rem;
  padding: ${theme.spacingXS} ${theme.spacingS};
  text-align: left;
  border: ${theme.borderM} ${theme.neutral.n20};
  color: ${theme.neutral.n20};

  :hover {
    border: ${theme.borderM} ${theme.primaryGreen.n70};
    transition: ${theme.timing.base} ease;
  }
  :focus {
    border: ${theme.borderL} ${theme.primaryGreen.n80};
    color: ${theme.textColor};
    transition: ${theme.timing.base} ease;
  }
`;
export default Input;
