import { useState, useEffect } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

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

const EarlyBirdSubscribe = () => {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitSubscribe = async (e, email) => {
    e.persist();
    e.preventDefault();
    try {
      console.log(email);

      // POST data

      const res = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
        credentials: "include"
      });
      await console.log(res.statusCode);
      // await setValue("");
      await setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isSubmitted) {
    return <div>You're now registered to the mailing list ! 😊</div>;
  }

  return (
    <StyledForm onSubmit={e => submitSubscribe(e, value)}>
      <StyledLabel>
        Be the first to know about
        <br />
        our global launch 🚀
        <br />
        <StyledInput
          placeholder="sarah@email.com"
          name="email"
          value={value}
          onChange={e => setValue(e.target.value)}
          type="email"
          required
        />
      </StyledLabel>
      <Button type="submit" value="Submit">
        💡 Subscribe
      </Button>
    </StyledForm>
  );
};

export default EarlyBirdSubscribe;
