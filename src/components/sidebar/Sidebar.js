import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import background from "../../assets/images/background.jfif";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
const Sidebar = () => {
  const user = useSelector(selectUser);
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
        <Avatar className='sidebar_avatar' src={user?.photoURL}>
          {user.displayName && user.displayName[0]}
          {/* if their is no user.photoURL */}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
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
