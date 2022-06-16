import React from 'react'
type PersonListProps = {
    names : {
        first:string,
        last:string
    }[]
}
function PersonList(props:PersonListProps) {
  return (
    <div>{props.names.map((name)=>{
        return(<p key={name.first}>{name.first} {name.last}</p>)
    })}</div>
  )
}

export default PersonList