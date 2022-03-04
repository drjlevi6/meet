import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  test("show an event's details", () => {
    const EventWrapper = shallow(
      <Event details={mockData}/>
    );
    expect(Event.displayedData).
      toHaveLength(mockData.length);
  });
  test("hide an event's details", () => {
    const EventWrapper = shallow(
      <Event details={mockData}/>
    );
    expect(Event.displayedData).toHaveLength(0);
  });
});
