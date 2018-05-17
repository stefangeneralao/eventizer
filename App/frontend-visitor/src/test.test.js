import React from 'react';
import {mount, render, shallow} from 'enzyme';

class Fixture extends React.Component {
  render () {
    return (
      <div className='root top'>
        <span className='child bottom'>test</span>
      </div>
    )
  }
}

const wrapper = mount(<Fixture />) // mount/render/shallow when applicable

expect(wrapper.find('span')).to.have.className('child')
expect(wrapper.find('span')).to.not.have.className('root')
