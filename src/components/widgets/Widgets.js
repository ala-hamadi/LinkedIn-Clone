import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Avatar } from "@material-ui/core";
const Widgets = () => {
  const newsArticle = (heading, subtitle, avatar) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        {avatar ? (
          avatar.length === 1 ? (
            <Avatar>{avatar}</Avatar>
          ) : (
            <Avatar src={avatar} />
          )
        ) : (
          <FiberManualRecordIcon />
        )}
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets_top'>
        <div className='widgets_header'>
          <h2>Add to your feed</h2>
          <InfoIcon />
        </div>
        {newsArticle("Ala Hamadi", "Full stack developer", "A")}
        {newsArticle(
          "Bill Gates",
          "Co-founder of Microsoft",
          "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        )}
        {newsArticle(
          "Elon Musk",
          "CEO, CTO, and chief designer of SpaceX",
          "E"
        )}
        {newsArticle(
          "Steve Jobs",
          "CEO and co-founder of Apple Inc",
          "https://cdn.vox-cdn.com/thumbor/DVN7eqE1o8HeBOP-jg15YHTsiLY=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg"
        )}
      </div>
      <div className='widgets_bottom'>
        <div className='widgets_header'>
          <h2>Today’s top courses</h2>
          <InfoIcon />
        </div>
        {newsArticle("Executive Influence", "John Ullmen")}
        {newsArticle("Customer Service Foundations", "Jeff Toister")}
        {newsArticle("Communication within Teams", "Daisy Lovelace")}
      </div>
    </div>
  );
};

export default Widgets;
