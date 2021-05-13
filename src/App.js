import React, { useEffect } from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import Login from "./pages/login/Login";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import Home from "./pages/Home/Home";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <div className='app'>{!user ? <Login /> : <Home />}</div>;
}

export default App;
