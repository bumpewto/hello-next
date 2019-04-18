import { useState } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import Button from "../elements/Button";
import Input from "../elements/Input";
import SpaceWrapper from "../elements/SpaceWrapper";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;

  font-size: 1.2rem;
`;

const Whitelist = () => {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitSubscribe = async (e, email) => {
    e.persist();
    e.preventDefault();
    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
        credentials: "include"
      });
      await console.log(res.statusCode);
      await setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => submitSubscribe(e, value);

  if (isSubmitted) {
    return <div>You're now registered to the waiting list !</div>;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="Subscribe to the waiting list to be the first to refresh your poor lungs"
        placeholder="stevie.kenarban@gmail.com"
        name="email"
        value={value}
        onChange={handleChange}
        type="email"
        required
      />
      <SpaceWrapper height="M">
        <Button type="submit" value="Submit">
          💡 Subscribe
        </Button>
      </SpaceWrapper>
    </StyledForm>
  );
};

export default Whitelist;
