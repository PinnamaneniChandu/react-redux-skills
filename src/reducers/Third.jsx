import {SET_THIRD} from '../actions/consts'

const initialState ={
    third:{},
    error:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_THIRD: return {...state,third:action.payload};
        default:return state;
    }
}