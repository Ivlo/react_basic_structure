import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";
import { TitleStyled } from "./TitleStyled";

const title = "Test Title";
const wrapper = shallow(<Title size="ivlo">{title}</Title>);

describe("Title", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the Titles children", () => {
    expect(wrapper.find(TitleStyled).prop("size")).toEqual("ivlo");
    // expect(wrapper.find("h1").text()).toEqual(title);
  });
  it("renders the Titles children", () => {
    expect(wrapper.find(TitleStyled).text()).toEqual(title);
  });
});
