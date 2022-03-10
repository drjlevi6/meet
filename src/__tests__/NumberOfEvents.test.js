import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let NumberOfEventsWrapper, numEvents;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    numEvents = NumberOfEventsWrapper.state('numberOfEvents')
      console.log('typeof(numEvents):', 
      typeof(numEvents));
  })

  test('show number of events', () => {
      //expect(typeof NumberOfEventsWrapper.state('numberOfEvents'))
      expect(typeof numEvents)
      .toBe('number')
  });
});
