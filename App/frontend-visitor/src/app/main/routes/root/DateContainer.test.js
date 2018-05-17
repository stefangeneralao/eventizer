import React from 'react';
import {mount, render, shallow} from 'enzyme';
import DateContainer from './DateContainer';

const wrapper = shallow(<DateContainer />);
expect(wrapper.find('div')).to.have.className('DateContainer')
