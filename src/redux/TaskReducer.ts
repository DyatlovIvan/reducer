import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TaskReducer = (state: Array<TaskType>, action: TsarType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            console.log('fffffff')
            const newState = [...state]
            return newState.filter(t => t.id != action.id)
        }
        case 'ADD-TASK':{
            let task = {id: v1(), title: action.title, isDone: false};
            return [task, ...state];
        }
        case 'CHANGE-TASK':{
            return state.map(m=>m.id ===action.taskId?{...m,isDone:action.isDone}:m)
        }
        default:
            return state
    }
}
type TsarType = removeTaskACType|addTaskACType|changeStatusType
type removeTaskACType = ReturnType<typeof removeTaskAC>



export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        id: id
    } as const
}
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title:string)=>{
    return{
        type:'ADD-TASK',
        title:title
    } as const
}
type changeStatusType = ReturnType<typeof changeStatusAC>
export  const  changeStatusAC = (taskId:string,isDone:boolean)=>{
    return{
        type:'CHANGE-TASK',taskId,isDone
    }as const
}