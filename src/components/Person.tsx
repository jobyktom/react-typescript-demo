import React from 'react'
type PersonProps = {
    name:{
        fname:string,
        lname:string
    }
}
function Person(props:PersonProps) {
  return (
    <div>{props.name.fname} {props.name.lname}</div>
  )
}

export default Person