import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import fetch from "isomorphic-unfetch";

import Button from "../elements/Button";
import Input from "../elements/Input";
import SpaceWrapper from "../elements/SpaceWrapper";

// Form Component

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;

  font-size: 1.2rem;
`;
const WaitingListForm = React.forwardRef(({
  label, onSubmit, value, onChange,
}, style) => {
  React.useImperativeHandle(style, () => ({}));
  return (
    <StyledForm onSubmit={onSubmit} style={{ style }}>
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
          Subscribe
        </Button>
      </SpaceWrapper>
    </StyledForm>
  );
});

const AnimatedWaitingListForm = animated(WaitingListForm);
// Actual component

const WaitingList = () => {
  const [value, setValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [status, setStatus] = useState(null);
  const [index, setIndex] = useState(3);

  useEffect(() => {
    if (isSubmit) {
      if (status === 400) {
        return setIndex(0);
      }
      if (status !== 200) {
        return setIndex(1);
      }
      return setIndex(2);
    }
    return setIndex(3);
  });

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const submitSubscribe = async (e, userEmail) => {
    e.persist();
    e.preventDefault();
    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
        credentials: "include",
      });
      await setStatus(res.status);
      await setIsSubmit(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => submitSubscribe(e, value);

  const formOptions = [
    ({ style }) => (
      <animated.div style={style} css="text-align: center;">
        You&apos;re already registered to the waiting list !
        <br />
        (っ^з^)♪♬
      </animated.div>
    ),
    ({ style }) => (
      <AnimatedWaitingListForm
        label={"Sorry, something went wrong... (ಥ﹏ಥ)\nPlease try again"}
        onSubmit={handleSubmit}
        value={value}
        onChange={handleChange}
        style={style}
      />
    ),
    ({ style }) => (
      <animated.div style={style} css="text-align: center;">
        You&apos;re now registered to the waiting list !
        <br />
        (｡◕‿‿◕｡)
      </animated.div>
    ),
    ({ style }) => (
      <AnimatedWaitingListForm
        label="Subscribe to the waiting list to be the first to refresh your poor lungs"
        onSubmit={handleSubmit}
        value={value}
        onChange={handleChange}
        style={style}
      />
    ),
  ];

  return (
    <>
      {transitions.map(({ item, key, fade }) => {
        const Page = formOptions[item];
        return <Page key={key} style={fade} />;
      })}
      {/* {transitions.map(({ state, key, fade }) => {
        if (state) {
          if (status === 400) {
            return (
              <animated.div key={key} style={fade} css="text-align: center;">
                You&apos;re already registered to the waiting list !
                <br />
                (っ^з^)♪♬
              </animated.div>
            );
          }
          if (status !== 200) {
            return (
              <WaitingListForm
                label={"Sorry, something went wrong... (ಥ﹏ಥ)\nPlease try again"}
                onSubmit={handleSubmit}
                value={value}
                onChange={handleChange}
                key={key}
                style={fade}
              />
            );
          }
          return (
            <animated.div key={key} style={fade} css="text-align: center;">
              You&apos;re now registered to the waiting list !
              <br />
              (｡◕‿‿◕｡)
            </animated.div>
          );
        }

        return (
          <WaitingListForm
            label="Subscribe to the waiting list to be the first to refresh your poor lungs"
            onSubmit={handleSubmit}
            value={value}
            onChange={handleChange}
            key={key}
            style={fade}
          />
        );
      })} */}
    </>
  );
};

export default WaitingList;
