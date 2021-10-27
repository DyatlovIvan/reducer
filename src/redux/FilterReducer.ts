import {FilterValuesType} from "../App";

export const FilterReducer =(state:FilterValuesType,action:changeFilterACType)=>{
    switch (action.type){
        case 'CHANGE-FILTER':{
            return action.value
        }
        default: return state
    }
}
type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value:FilterValuesType)=>{
    return{
        type: 'CHANGE-FILTER',value
    }as const
}