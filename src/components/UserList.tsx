import React, { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../store/action-creators/user"

const UserList: React.FC=()=>{
    const {users, error, loading}=useTypedSelector(state=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    if(loading){
        return <h1> ... идет загрузка</h1>
    }
    if(error){
        return  <h1>{error}</h1>
    }

    return(
        <>
            {
                users.map(user=><div key={user.id}>{user.name}</div>)
            }
        </>
    )
}
export default UserList