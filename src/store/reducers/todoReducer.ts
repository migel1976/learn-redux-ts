import { TodoAcionTypes, TodoAction, TodoState } from "../../types/todo"

const initialState:TodoState={
    todos:[],
    loading:false,
    error:null,
    limit:10,
    page:10
}

export const todoReducer=(state=initialState, action:TodoAction):TodoState=>{
    switch(action.type){
        case TodoAcionTypes.FETCH_TODO:
            return {loading:true, error:null, todos:[]}
        case TodoAcionTypes.FETCH_TODO_SUCCES:
            return {...state, loading:false, error:null, todos:action.payload}
        case TodoAcionTypes.FETCH_TODO_ERROR:
            return {...state, loading:false, error:action.payload, todos:[]}
        case TodoAcionTypes.FETCH_TODO_PAGE:
            return {...state, page:action.payload}
        default:
            return state
    }
}
