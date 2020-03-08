import React from 'react';
import '../../assets/style/newsfeed.css';

const NewsFeed = ({name, language, image}) => {
    return(
            <div className="newsfeed-item">
                <p className="newsfeed-text"><span className="bold">{name}</span></p>
                <p className="newsfeed-text">Language: <span className="bold">{language}</span></p>
                <img src ={image} className="newsfeed-img" alt="news crypto pictures" />
        </div>
    )
}

export default NewsFeed; 