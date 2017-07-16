import React from 'react';
import {mount, shallow, render} from 'enzyme';
import {expect} from 'chai';
import Greeter from '../Greeter.jsx';

describe('Greeter', function() {
   it('should display greeting with name', function() {
      const wrapper = shallow(<Greeter name='Bruce Wayne'/>);

      expect(wrapper.contains(<div>Hello, Bruce Wayne</div>)).to.equal(true);
   });
});
