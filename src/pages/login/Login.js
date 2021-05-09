import React from "react";
import "./Login.css";
import linkedin from "../../assets/images/linkedin.png";
const Login = () => {
  const handleRegister = () => {};
  const handleLogin = () => {};

  return (
    <div className='login'>
      <img src={linkedin} alt='' />

      <form>
        <input type='text' placeholder='Full name (required)' />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input type='Email' placeholder='Email (required)' />
        <input type='Password' placeholder='Password (required)' />
        <button type='submit' onClick={handleLogin}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className='login_register' onClick={handleRegister}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
