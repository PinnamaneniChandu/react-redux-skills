import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index.jsx'

const initialState ={};
const middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default createStore(combineReducers,initialState, middleware);