import {GET_SECOND,SET_SECOND} from '../actions/consts'

const initialState ={
    second:{},
    error:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_SECOND: return {...state,second:action.payload};
        default:return state;
    }
}