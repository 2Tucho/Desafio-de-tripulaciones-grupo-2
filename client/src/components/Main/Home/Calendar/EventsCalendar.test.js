import React from "react";
import { shallow } from "enzyme";
import EventsCalendar from "./EventsCalendar";

describe("EventsCalendar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EventsCalendar />);
    expect(wrapper).toMatchSnapshot();
  });
});