import React from 'react';
import { shallow } from 'enzyme';
import Root from './index.js';

describe('Root', function() {
  it('renders without crashing', function() {
    const wrapper = shallow(
      <Root />
    );
  }
)});
