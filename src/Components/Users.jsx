import React from 'react'

const Users = (props) => {
    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)
  return (
    <div  style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='user-card'>
       
       <h1>{props.elem.name}</h1>
       <p>{props.elem.website}</p>
      
    </div>
  )
}

export default Users
