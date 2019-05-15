import React from 'react';
import App from './OldApp';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

/*
* This is factory function to create a ShallowWrapper for the App Component
@function setup
@param {object} props - Component props for Setup
@param {object} state - Initial state for Setup
@return {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state)
  return wrapper
}

/**
 * 
 * @param {ShallowWrapper} wrapper - Shallow wrapper to search within 
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper} 
 */
const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
describe('Test for increment counter', () => {
  test('renders without crashing', () => {
    const wrapper = setup();
    const renderComp = findByAttribute(wrapper, 'component-app');
    expect(renderComp.length).toBe(1);
  });

  test('test render of increment button', () => {
    const wrapper = setup();
    const renderComp = findByAttribute(wrapper, 'counter-button');
    expect(renderComp.length).toBe(1);
  });

  test('test render of counter display', () => {
    const wrapper = setup();
    const renderComp = findByAttribute(wrapper, 'counter-view');
    expect(renderComp.length).toBe(1);
  })

  test('test intial value should be 0 of counter', () => {
    const wrapper = setup();
    let initialState = wrapper.state('counter');
    expect(initialState).toBe(0);
  })

  test('test check increment of counter', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByAttribute(wrapper, 'counter-button');
    button.simulate('click');
    const updateCounter=findByAttribute(wrapper, 'counter-view');
    expect(updateCounter.text()).toContain(counter+1);
  })


  test('test render of decrement button', () => {
    const wrapper = setup();
    const renderComp = findByAttribute(wrapper, 'decrement-counter-button');
    expect(renderComp.length).toBe(1);
  });

  test('test check decrement of counter', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByAttribute(wrapper, 'decrement-counter-button');
    button.simulate('click');
    const updateCounter=findByAttribute(wrapper, 'counter-view');
    expect(updateCounter.text()).toContain(counter-1);
  })

  test('error does not show when not needed', () => {
    const wrapper = setup();
    const errorView = findByAttribute(wrapper, 'test-error-view');
    expect(errorView.length).toBe(0);
  });

  test('decrement is clicked when counter is 0', () => {
    const counter = 0;
    const wrapper = setup(null, { counter });

    const button = findByAttribute(wrapper, 'decrement-counter-button');
    button.simulate('click');
    let updateCounter=findByAttribute(wrapper, 'counter-view');
    expect(updateCounter.text()).toContain(0);
    let errorView = findByAttribute(wrapper, 'test-error-view');
    expect(errorView.length).toBe(1);

    const incrementButton = findByAttribute(wrapper, 'counter-button');
    incrementButton.simulate('click');
    updateCounter=findByAttribute(wrapper, 'counter-view');
    expect(updateCounter.text()).toContain(counter+1);
    errorView = findByAttribute(wrapper, 'test-error-view');
    expect(errorView.length).toBe(0);
  });

})

