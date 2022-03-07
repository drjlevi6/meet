import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  let isExpanded;
  beforeAll(() => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      isExpanded = EventWrapper.state('isExpanded');
  })

  test("show an event's details", () => {

    expect(EventWrapper
      .find(".event-details").exists()).toEqual(false);
    expect(EventWrapper
      .find('button').exists()  ).toEqual(true);

    /*  Don't thin we need '.first()'  after 
    EventWrapper.find('button') */
    EventWrapper.find('button').simulate('click'); 
    expect(EventWrapper.find(".event-details").exists())
      .toEqual(true); // appears to work
  });

  test("hide an event's details", () => {
    console.log('isExpanded:', isExpanded);
  });
});
