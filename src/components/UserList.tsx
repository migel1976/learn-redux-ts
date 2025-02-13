import React, { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
// import { useDispatch } from "react-redux"
// import { fetchUsers } from "../store/action-creators/user"
import { useActions } from "../hooks/useActions"

const UserList: React.FC=()=>{
    const {users, error, loading}=useTypedSelector(state=>state.user)
    // const dispatch=useDispatch()
    const {fetchUsers}=useActions()
    useEffect(()=>{
        // dispatch(fetchUsers())
        fetchUsers()
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