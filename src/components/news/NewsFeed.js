import React from 'react';
import './NewsFeed.css';

const NewsFeed = (props) => {
    return(
            <div className="newsfeed-item">
                <p> {props.key}</p>
                <p className="newsfeed-text"><span className="bold">{props.name}</span></p>
                <p className="newsfeed-text">Language: <span className="bold">{props.language}</span></p>
                <img src ={props.image} className="newsfeed-img" alt="newps crypto pictures" />
        </div>
    )
}

export default NewsFeed; 