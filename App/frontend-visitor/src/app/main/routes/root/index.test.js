import React from 'react';
import { shallow } from 'enzyme';
import Root from './index.js';

it('renders without crashing', () => {
  shallow(<Root />);
});
