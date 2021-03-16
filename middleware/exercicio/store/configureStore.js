import token from './token.js';
import user from './user.js';
import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

const reducer = Redux.combineReducers({ token, user });

const store = Redux.createStore(reducer, enhancer);

export default store;
