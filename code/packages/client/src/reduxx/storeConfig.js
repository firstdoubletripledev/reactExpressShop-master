// import applyMiddleware, createStore function from redux
import { applyMiddleware, createStore } from 'redux';

// import thunk function from redux-thunk
import thunk from 'redux-thunk';

// import rootReducer
import rootReducer from './reducers';

// create store for redux
const store = createStore(rootReducer, applyMiddleware(thunk));

// export store
export default store;
