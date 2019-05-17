
import { createStore, applyMiddleware,compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.devToolsExtension ?window.devToolsExtension() : f=>f
    ),
);

export default store;