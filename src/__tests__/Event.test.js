import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeEach(() => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
  })

  test("show an event's details", () => {
    expect(EventWrapper
      .find(".event-details").exists()).toEqual(false);
    expect(EventWrapper
      .find('button').exists()  ).toEqual(true);
    console.log('EventWrapper.props():', EventWrapper.props());

    /*  Don't thin we need '.first()'  after 
    EventWrapper.find('button') */
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(true);
    expect(EventWrapper.find(".event-details").exists())
      .toEqual(true); // appears to work
  });

  test("hide an event's details", () => {
    expect(EventWrapper.state('isExpanded')).toBe(false);
    expect(EventWrapper.find(".event-details").exists())
    .toEqual(false);
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(true);
    expect(EventWrapper.find(".event-details").exists())
      .toEqual(true);
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(false);
    expect(EventWrapper.find(".event-details").exists())
    .toEqual(false);
  });
  test.todo('finish hiding an event\'s details');
});
