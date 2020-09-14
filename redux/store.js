import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

const middlewares = [thunk];

let store = createStore(
    reducers,
    applyMiddleware(...middlewares)
)

export default store
