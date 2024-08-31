
import React, { useContext } from 'react'
import style from "./ProtectedRoute.module.css"
import { Navigate } from 'react-router-dom'
import { userContext } from '../../Context/UserContext/UserContext'


export default function ProtectedRoute(props) {
 
 const {userToken}= useContext(userContext)
 
 if (userToken) {

  return props.children 

  
 }
 else {

return <Navigate  to={"/login"}></Navigate>
 }
 
  return (
    <div>ProtectedRoute</div>
  )
}
