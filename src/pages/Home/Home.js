import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Widgets from "../../components/widgets/Widgets";

const Home = () => {
  return (
    <>
      <Header />
      <div className='app_body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  );
};

export default Home;
