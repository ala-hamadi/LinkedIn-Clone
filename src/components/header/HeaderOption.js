import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ Icon, title, avatar, click, displayName }) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon' onClick={click} />}
      {(avatar || displayName) && (
        <Avatar className='headerOption_avatar' src={avatar}>
          {displayName[0]}
        </Avatar>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;
