import React, { useState } from "react";
import "./Login.css";
import linkedin from "../../assets/images/linkedin.png";
import { auth } from "../../Firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
const Login = () => {
  const [toogle, setToogle] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileUrlPic, setProfileUrlPic] = useState("");

  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !password || !email)
      return alert("Please enter your credentials");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profileUrlPic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <img src={linkedin} alt='' />

      <form>
        {!toogle && (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Full name (required)'
            />
            <input
              value={profileUrlPic}
              onChange={(e) => setProfileUrlPic(e.target.value)}
              type='text'
              placeholder='Profile pic URL (optional)'
            />
          </>
        )}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='Email'
          placeholder='Email (required)'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='Password'
          placeholder='Password (required)'
        />
        {toogle ? (
          <button type='submit' onClick={handleLogin}>
            Sign In
          </button>
        ) : (
          <button type='submit' onClick={handleRegister}>
            Sign Up
          </button>
        )}
      </form>
      {toogle ? (
        <p>
          Not a member?{" "}
          <span className='login_register' onClick={() => setToogle(false)}>
            Register Now
          </span>
        </p>
      ) : (
        <p>
          A member?{" "}
          <span className='login_register' onClick={() => setToogle(true)}>
            Login Now
          </span>
        </p>
      )}
    </div>
  );
};

export default Login;
