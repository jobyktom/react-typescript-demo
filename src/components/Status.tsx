import React from 'react'
type statusProps = {
    status : 'loading' | 'error' | 'success'
}
function Status(props:statusProps) {
    let message;
    if(props.status === 'loading'){
        message = 'loading....'
    }else if(props.status === "success"){
        message = "Data loaded successfully"
    }else if (props.status === "error"){
        message = "something wrong happened!"
    }
  return (
    <div>Status : {message}</div>
  )
}

export default Status