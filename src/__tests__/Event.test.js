import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  test("show an event's details", () => {
    const EventWrapper = shallow(
      <Event details={eventMockDetails}/>
    );
    expect(Event.displayedData).toHaveLength(eventMockDetails.length);
  });
  test("hide an event's details", () => {
    const EventWrapper = shallow(
      <Event details={eventMockDetails}/>
    );
    expect(Event.displayedData).toHaveLength(0);
  });
});
