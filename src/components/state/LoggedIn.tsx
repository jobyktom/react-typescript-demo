import React from 'react'
import { useState } from 'react'
type AuthUser = {
    loggedIn:boolean
    name :string,
    email:string
}
function LoggedIn() {
    const [isLoggedIn, setisLoggedIn] = useState<AuthUser | null>(null)
    const HandleLogin =()=>{setisLoggedIn({
        loggedIn:true,
        name : 'Jobby',
        email :'Jobyktom@gmail.com'
    })}
    const HandleLogout =()=>{setisLoggedIn(null)}
  return (
    <div>
        <button onClick={HandleLogin}></button>
        <button onClick={HandleLogout}></button>
        <div> status :- {isLoggedIn?.loggedIn ? 'LoggedIn' : 'LogedOut'}</div>
        <p>name : {isLoggedIn?.name}</p>
        <p>email : {isLoggedIn?.email}</p>
    </div>
  )
}

export default LoggedIn