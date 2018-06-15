import { combineReducers } from "redux";
import First from './First';
import Second from './Second';
import Third from './Third';

export default combineReducers({
    first:First,
    second:Second,
    third:Third
});