import React, { useState } from 'react'
import axios from 'axios'
import Users from './Components/Users'
const App = () => {
  const [user, setuser] = useState([])
  async function GetData(){
    let data = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data.data);
    setuser(data.data)
 
  }
  return (
    <div>
      <button onClick={()=>{
        GetData();
      }}>Get Data</button>
      {user.map(function(elem,idx){
        return <div>
            <Users elem= {elem}/>
        </div>
       
      })}
    </div>
  )
}

export default App
