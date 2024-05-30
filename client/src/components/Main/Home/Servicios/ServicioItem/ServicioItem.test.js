import React from "react";
import { shallow } from "enzyme";
import ServicioItem from "./ServicioItem";

describe("ServicioItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ServicioItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
