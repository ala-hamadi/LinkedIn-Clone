import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./pages/login/Login";

function App() {
  const user = useSelector(selectUser);
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
