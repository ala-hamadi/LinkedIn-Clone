import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import { useSelector } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import Login from "./pages/login/Login";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth?.user?.email,
  //           uid: userAuth?.user?.uid,
  //           displayName: userAuth?.user?.displayName,
  //           photoURL: userAuth?.user?.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
