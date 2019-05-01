import React from "react";
import { mount } from "enzyme";
import WaitingList from "./WaitingList";

describe("WaitingList component", () => {
  const wrapper = mount(<WaitingList />);
  test("starts with the input", () => {
    expect(wrapper.find("input")).toBeTruthy();
  });
});
