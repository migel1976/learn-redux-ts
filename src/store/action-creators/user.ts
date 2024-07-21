import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/users"
import axios from "axios"

const url='https://jsonplaceholder.typicode.com/users'

export const fetchUsers=()=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try{
            dispatch({type:UserActionTypes.FETCH_USERS})
            const res=await axios.get(url)
            setTimeout(() => {
                dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:res.data})
            }, 1000);

        } catch(e){
            dispatch({type:UserActionTypes.FETCH_USERS_ERROR,
                payload:'Ошибка получения пользователей'
            })
        }
    }
}