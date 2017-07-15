import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import About from '../About';

describe('About', function() {
   it('should display About Yourself in fieldset', function() {
      const wrapper = shallow(<About />);
 
      expect(wrapper.contains(<legend>About Yourself</legend>)).to.equal(true);
   });

   it('should find Name input field node', function() {
      const wrapper = shallow(<About />);
 
      expect(wrapper.find('#name').length).to.equal(1);
   });

   it('should display value from Name input field', function() {
      const wrapper = shallow(<About />);

      wrapper.find('#name').simulate('change', {target: {value: 'My Name'}});
      expect(wrapper.find('#name').node.props.value).to.equal('My Name'); 
   });
});
