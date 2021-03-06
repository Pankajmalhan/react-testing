import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';
import { middlewares } from "../configureStore";
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * 
 * @param {*} component 
 * @param {*} conformingProps 
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}

/**
* Create a testing store with imported reducers, middleware, and initial state.
*  globals: rootReducer, middlewares.
* @param {object} initialState - Initial state for store.
* @function storeFactory
* @returns {Store} - Redux store.
*/
export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
  );
}