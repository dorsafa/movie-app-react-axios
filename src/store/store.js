import {createStore, compose, applyMiddleware} from 'redux'
import movieListReducer from '../reducer/movieListReducer'
import thunk from 'redux-thunk';


const store = createStore( movieListReducer, compose (
    applyMiddleware(thunk),
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     ))

export default store;