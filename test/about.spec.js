import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import About from '../About';

describe('About', function() {
   it('should display About Yourself in fieldset', function() {
      const wrapper = shallow(<About />);
 
      expect(wrapper.contains(<legend>About Yourself</legend>)).to.equal(true);
   });
});
