import React from 'react';
import Input from './Input';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from '../utils/testUtil';

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
    const store = storeFactory(props)
    const wrapper = shallow(<Input store={store} />).dive().dive();
    if (state) wrapper.setState(state)
   // console.log(wrapper.debug())
    return wrapper
}


describe('render', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = { success: false };
        wrapper = setup(initialState);
    })
    describe('word has not been guessed', () => {
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
        test('does not render submit button', () => {
            const submit = findByTestAttr(wrapper, 'submit-button');
            expect(submit.length).toBe(0);
        });
    });
});

describe('update state', () => {

});

