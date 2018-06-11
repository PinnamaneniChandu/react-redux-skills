import {GET_FIRST,SET_FIRST} from './consts'

export const addFirstData =(firstData)=>(dispatch)=>
    {
        if(firstData){
            dispatch({type:SET_FIRST,payload:firstData})
        }
    }