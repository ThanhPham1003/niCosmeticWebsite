import React, {useState} from 'react'
import Admin from './Admin'
import Login from './Login'
const Host = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      {auth ? (
        <Admin/>
      ):(
        <Login setAuth={setAuth}/>
      )}
    </div>
  )
}

export default Host
