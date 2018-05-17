import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from 'enzyme';
import chai from 'chai';
import expect from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme()) // Note the invocation at the end

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0);
  };

window.matchMedia = window.matchMedia || function() {
return {
  matches : false,
  addListener : function() {},
  removeListener: function() {}
  };
};
