import {GET_FIRST,SET_FIRST, SET_SECOND} from './consts'

export const addSecondData =(secondData)=>(dispatch)=>
    {
        if(secondData){
            dispatch({type:SET_SECOND,payload:secondData})
        }
    }