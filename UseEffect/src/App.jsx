import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [first, setfirst] = useState(0)
  const [user, setuser] = useState(' ')
  async function GetData(){
    let data = await axios.get('https://randomuser.me/api/');
     setuser(data.data.results[0].name.first+' '+data.data.results[0].name.last);
  }
   useEffect(function(){
    GetData()
   },[first])
  
  return (
    <div>
      <h1>{user}</h1>
      <h1>{first}</h1>
      <button onClick={()=>{
        setfirst(first+1);
      }}>Increase</button>
    </div>
  )
}

export default App
