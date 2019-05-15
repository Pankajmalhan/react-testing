import React from 'react';
import Congrats from './Congrats';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr,checkProps } from '../utils/testUtil';
import checkPropTypes from 'check-prop-types';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

/**
 * Factory function create and return the shallow warpper for Congrats component
 * @function setup
 * @param {object} props 
 * @param {object} state 
 * @returns {shallowRapper}
 */
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<Congrats {...props} />);
    if (state) wrapper.setState(state)
    return wrapper
}



test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
});