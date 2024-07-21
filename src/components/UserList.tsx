import React from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
const UserList: React.FC=()=>{
    // const state=useTypedSelector(state=>state.user)
    const {users, error, loading}=useTypedSelector(state=>state.user)
    // const state=useSelector(state=>state.user)
    // console.log(state)
    return(
        <>
        </>
    )
}
export default UserList