//"use strict";
import React from "react";
import Slider from "react-slick";
import { shallow, mount } from "enzyme";
import ImageCarousel from './ImageCarousel';

describe('ImageCarousel', function() {
  it("should render", function() {
    const wrapper = shallow(
      <Slider>
        <div>slide1</div>
      </Slider>
    );
    expect(
      wrapper.contains(
        <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
          slide1
        </div>
      )
    ).toBe(true);
  });
});
