/**
 * Test: Checkbox
 */

import React from 'react';
import Checkbox from '../../lib/Checkbox';

const Lol = (props) => (<input type="checkbox" checked={props.input.value} />);
describe('Checkbox', () => {

  /**
   * Test with redux form
   */
  describe('With redux form', () => {
    const reduxFormProps = {
      input: {
        value: 1,
      },
    };

    it('should be checked', (done) => {
      const wrapper = shallow(<Checkbox />);
      // console.log(wrapper.props());
      // expect(wrapper.type()).to.eql('input');
      // console.log(wrapper.find({ checked: true }));
       // expect(wrapper.find({ checked: true })).to.equal(true);

       // expect(wrapper).to.be.checked();
       expect(wrapper.props().checked).is.equal(true);

       done();
    });
  });
});
