import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;

  font-size: 1.2rem;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  margin: 0.7rem 0;
  padding: 0.3rem;
  border: none;
  border-radius: 0.4rem;

  background: papayawhip;
  color: crimson;

  ::-webkit-input-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
`;

const Button = styled.button`
  margin: 0.7rem 0;
  padding: 0.5rem;
  width: 10rem;
  border: 2px solid palevioletred;
  border-radius: 0.3rem;

  font-size: 1.3rem;

  background: papayawhip;
  color: palevioletred;
`;

const EarlyBirdSubscribe = () => (
  <StyledForm>
    <StyledLabel>
      Be the first to know about
      <br />
      our global launch 🚀
      <br />
      <StyledInput placeholder="sarah@email.com" type="email" />
    </StyledLabel>
    <Button type="submit" value="Submit">
      💡 Subscribe
    </Button>
  </StyledForm>
);

export default EarlyBirdSubscribe;
