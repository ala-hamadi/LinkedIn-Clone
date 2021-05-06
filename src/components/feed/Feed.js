import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

const Feed = () => {
  const inputOption = (Icon, title) => {
    return (
      <div className='feed_inputOption'>
        {Icon}
        <h4>{title}</h4>
      </div>
    );
  };
  return (
    <div className='feed'>
      {/* Top Input  */}
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          {inputOption(<ImageIcon style={{ color: "#70B5F9" }} />, "Photo")}
          {inputOption(
            <SubscriptionsIcon style={{ color: "#E7A33E" }} />,
            "Video"
          )}
          {inputOption(<EventNoteIcon style={{ color: "#C0CBCD" }} />, "Event")}
          {inputOption(
            <CalendarViewDayIcon style={{ color: "#7FC15E" }} />,
            "Write aricle"
          )}
        </div>
      </div>
      {/* Posts  */}
    </div>
  );
};

export default Feed;
