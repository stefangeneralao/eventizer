import React from 'react';
import ImageComponent from './ImageComponent';
import { shallow, mount } from "enzyme";


const wrapper = shallow(<ImageComponent />);
  expect(wrapper.props().data).toBe('something');
