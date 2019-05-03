import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import ProgressiveImage from "./ProgressiveImage";

describe("ProgressiveImage component", () => {
  const wrapper = mount(<ProgressiveImage />);

  test("starts with blurred image", () => {
    expect(wrapper.exists("Final Image")).toBeTruthy();
    expect(wrapper.find("Final Image").prop("style")).toContain(`img {
      filter: blur(25px);
    }`);
  });
});
