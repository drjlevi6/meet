import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  test("show an event's details", () => {
    const EventWrapper = shallow(
      <Event event={mockData[0]}/> 
    );  // {mockData[0]} is first event
      expect(EventWrapper.find(".event-details").exists()).toEqual(false);
      expect(EventWrapper.find('button').exists()  ).toEqual(true);
      EventWrapper.find('button').simulate('click');  /* not sure we need '.first()'
                                            after EventWrapper.find('button') */
      expect(EventWrapper.find(".event-details").exists()).toEqual(true); // appears to work
  });

  test("hide an event's details", () => {
    const EventWrapper = shallow(
      <Event event={mockData[0]}/>
    );
    console.log('isExpanded:', EventWrapper.state.isExpanded);
  });
  
});
