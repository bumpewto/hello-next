import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import ProgressiveImage from "./ProgressiveImage";

describe("ProgressiveImage component", () => {
  const wrapper = mount(<ProgressiveImage />);

  test("starts with blurred image", () => {
    expect(wrapper.exists("BlurredImage")).toBeTruthy();
    console.log(wrapper.debug());
    expect(wrapper.find("BlurredImage").prop("style")).toContain(`img {
      filter: blur(25px);
    }`);
  });
});
