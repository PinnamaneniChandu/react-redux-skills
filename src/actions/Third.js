import {SET_THIRD} from './consts'

export const addThirdData =(thirdData)=>(dispatch)=>
    {
        if(thirdData){
            dispatch({type:SET_THIRD,payload:thirdData})
        }
    }