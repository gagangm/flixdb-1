import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from '../reducer/movies';
import filterReducer from '../reducer/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
          movies: moviesReducer,
          filter: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );

    return store;
};