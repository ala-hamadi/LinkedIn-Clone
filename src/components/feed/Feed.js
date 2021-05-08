import React, { useState, useEffect } from "react";
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
import { db } from "../../Firebase";
import firebase from "firebase";
const Feed = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Ala Hamadi",
      description: "test description",
      message: message,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
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
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
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
    </div>
  );
};

export default Feed;
