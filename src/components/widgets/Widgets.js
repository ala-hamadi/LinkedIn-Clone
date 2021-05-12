import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Today’s top courses</h2>
        <InfoIcon />
      </div>
      {newsArticle("Executive Influence", "John Ullmen")}
      {newsArticle("Customer Service Foundations", "Jeff Toister")}
      {newsArticle("Communication within Teams", "Daisy Lovelace")}
    </div>
  );
};

export default Widgets;
