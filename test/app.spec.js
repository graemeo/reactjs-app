import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

describe("App", function() {
   it("should display Hello World", function() {
     const wrapper = shallow(<App/>);
     expect(wrapper.contains('Hello World!!!')).to.equal(true);
   });
});
