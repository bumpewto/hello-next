import styled from "styled-components";
import theme from "../styles/_theme";

const Label = styled.label``;

const Field = styled.input`
  min-height: 2rem;
  width: 15rem;
  margin-top: ${theme.spacing.M};
  padding: ${theme.spacing.XS} ${theme.spacing.S};
  border: ${theme.borderM} ${theme.neutral.n70};
  border-radius: ${theme.borderRadius};
  text-align: center;

  color: ${theme.neutral.n70};
  background: ${theme.neutral.n05};

  :hover {
    border: ${theme.borderM} ${theme.primaryGreen.n70};
    transition: ${theme.timing.base} ease;
  }
  :focus {
    outline: 0 !important;
    border: ${theme.borderL} ${theme.primaryGreen.n80};
    color: ${theme.textColor.default};
    transition: ${theme.timing.base} ease;
  }
  ::placeholder {
    font-style: italic;
  }
`;

const Div = styled.div`
  display: block;
  text-align: left;
`;

const Input = ({ label, ...props }) => (
  <Label>
    <Div> {label}</Div>
    <Field {...props} autocomplete="off" />
  </Label>
);
export default Input;
