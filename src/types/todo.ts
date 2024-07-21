export interface TodoState{
    todos:any[],
    loading:boolean,
    error:null|string,
    page:number,
    limit:number
}

export enum TodoAcionTypes{
    FETCH_TODO='FETCH_TODO',
    FETCH_TODO_SUCCES='fETCH_TODO_SUCCES',
    FETCH_TODO_ERROR='FETCH_TODO_ERROR',
    FETCH_TODO_PAGE='FETCH_TODO_PAGE',
}

interface FetchTodoAction{
    type: TodoAcionTypes.FETCH_TODO
}

interface FetchTodoSuccessAction{
    type: TodoAcionTypes.FETCH_TODO_SUCCES,
    payload: any[]
}

interface FetchTodoErrorAction{
    type: TodoAcionTypes.FETCH_TODO_ERROR,
    payload: string 
}

interface FetchTodoPageAction{
    type: TodoAcionTypes.FETCH_TODO_PAGE,
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | FetchTodoPageAction