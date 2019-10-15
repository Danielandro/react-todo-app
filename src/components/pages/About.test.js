import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  it('renders without crashing', () => {
    const AboutWrapper = shallow(<About />);
    expect(AboutWrapper.exists()).toBe(true);
  })
})
