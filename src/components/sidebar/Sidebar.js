import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import background from "../../assets/images/background.jfif";
const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className='sidebar_recentItem'>
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src={background} alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>Ala Hamadi</h2>
        <h4>IT Student at Higher Institute of Computer Science (ISI Ariana)</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed your profile</p>
          <p className='sidebar_number'>30</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views of your post</p>
          <p className='sidebar_number'>400</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("angular")}
        {recentItem("Spring boot")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("UX UI")}
      </div>
    </div>
  );
};

export default Sidebar;
