import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
const App = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleInput= (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleInput} >
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} id="username" placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password"/>
                </div>
                <button type="submit" className="btn btn-login btn-block">Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default App