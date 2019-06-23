import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shopReducer from './../reducers';

const rootReducer = combineReducers({
    cart: shopReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;