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
const WaitingListForm = ({ label, onSubmit, value, onChange }) => (
  <StyledForm onSubmit={onSubmit}>
    <Input
      label={label}
      placeholder="stevie.kenarban@gmail.com"
      name="email"
      value={value}
      onChange={onChange}
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
const Whitelist = () => {
  const [value, setValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [status, setStatus] = useState(null);

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
      await setStatus(res.status);
      await setIsSubmit(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => submitSubscribe(e, value);

  if (isSubmit) {
    if (status === 400) {
      return (
        <div css="text-align: center;">
          You're already registered to the waiting list ! <br />
          (っ^з^)♪♬
        </div>
      );
    } else if (status !== 200) {
      return (
        <WaitingListForm
          label={"Sorry, something went wrong... (ಥ﹏ಥ)\nPlease try again"}
          onSubmit={handleSubmit}
          value={value}
          // setIsSubmit(false),
          // setStatus(null),
          onChange={handleChange}
        />
      );
    } else {
      return (
        <div css="text-align: center;">
          You're now registered to the waiting list !<br />
          (｡◕‿‿◕｡)
        </div>
      );
    }
  }

  return (
    <WaitingListForm
      label="Subscribe to the waiting list to be the first to refresh your poor lungs"
      onSubmit={handleSubmit}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Whitelist;
