import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'

import Helmet from '../components/Helmet'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import Admin from './Admin'
import Host from './Host'

const Login = ({setAuth}) => {
  const firebase = useContext(FirebaseContext);
  const [token, setToken] = useState('');
  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Vui lòng nhập tài khoản của bạn",
      errorMessage:"Bạn chưa nhập tài khoản",
      label: "Tài khoản",
      required: true
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Vui lòng nhập mật khẩu của bạn",
      errorMessage:"Bạn chưa nhập mật khẩu",
      label: "Mật khẩu",
      required: true
    }
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
    
  }

  const handleLogin = async () => {
    const tk = await firebase.signIn(values.username, values.password);
    if (tk.isSuccessful){
      setAuth(true);
      setToken(tk.message);
    }
    else {
      alert(tk.message);
    }
  }

  // useEffect(() => {
  //   console.log("22222", fire.getCurrentUser().getIdToken());
  // }, [])


  return (
    <Helmet title="Đăng nhập">
      <div className="order"> 
        <div className='order__text'>Đăng nhập</div>
        <form>
            {inputs.map((input) =>(
              <FormInput 
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              />
            ))}
        </form>
        <div className='order__login-button'>
          <Button size="sm" onClick={() => handleLogin()}>Xác nhận</Button>
        </div>
      </div>
    </Helmet>
    
  )
}

export default Login
