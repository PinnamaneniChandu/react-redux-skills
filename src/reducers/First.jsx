import {GET_FIRST,SET_FIRST} from '../actions/consts'

const initialState ={
    first:{},
    error:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_FIRST: return {...state,first:action.payload};
        default:return state;
    }
}