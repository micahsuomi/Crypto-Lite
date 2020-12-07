import React from "react";

import { NewsFeedsItemProps } from "../../types";

import "./style.scss";

const NewsFeedsItem = ({ 
  id,
  language, 
  image,
  name  
}: NewsFeedsItemProps) => {
  return (
    <div className="newsfeed" key={id}>
      <p className="newsfeed-text">
        <span className="bold">{name}</span>
      </p>
      <p className="newsfeed-text">
        Language: <span className="bold">{language}</span>
      </p>
      <div className="newsfeed__image">
        <img src={image} className="newsfeed-img" alt={name} />
      </div>
    </div>
  );
};

export default NewsFeedsItem;
