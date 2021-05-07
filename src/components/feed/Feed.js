import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };
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
            <button onClick={sendPost} type='submit'>
              Send
            </button>
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
      {posts.map((post) => (
        <Post
          name='Ala Hamadi'
          description='this is description'
          message='this is message'
          LikeButton={inputOption(
            <ThumbUpOutlinedIcon style={{ color: "gray" }} />,
            "Like"
          )}
          CommentButton={inputOption(
            <ChatOutlinedIcon style={{ color: "gray" }} />,
            "Comment"
          )}
          ShareButton={inputOption(
            <ShareOutlinedIcon style={{ color: "gray" }} />,
            "Share"
          )}
          SendButton={inputOption(
            <SendOutlinedIcon style={{ color: "gray" }} />,
            "Send"
          )}
        />
      ))}
      <Post
        name='Ala Hamadi'
        description='this is description'
        message='this is message'
        LikeButton={inputOption(
          <ThumbUpOutlinedIcon style={{ color: "gray" }} />,
          "Like"
        )}
        CommentButton={inputOption(
          <ChatOutlinedIcon style={{ color: "gray" }} />,
          "Comment"
        )}
        ShareButton={inputOption(
          <ShareOutlinedIcon style={{ color: "gray" }} />,
          "Share"
        )}
        SendButton={inputOption(
          <SendOutlinedIcon style={{ color: "gray" }} />,
          "Send"
        )}
      />
    </div>
  );
};

export default Feed;
