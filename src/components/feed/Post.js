import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

const Post = ({
  name,
  description,
  message,
  photUrl,
  LikeButton,
  CommentButton,
  ShareButton,
  SendButton,
}) => {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        {LikeButton}
        {CommentButton}
        {ShareButton}
        {SendButton}
      </div>
    </div>
  );
};

export default Post;
