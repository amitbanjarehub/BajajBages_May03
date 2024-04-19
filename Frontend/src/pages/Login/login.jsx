import React from "react";
import './style.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

  return (
   
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"
            />
          </div>
          <button type="submit"  className="btn" onClick={() => navigate('/dashboard')}>LOGIN</button>       

          <a className="link" href="/signup">
          Not registered ? Please Sign Up !
        </a>
        </form>
       
      </div>
  
  );
};

export default Login;
