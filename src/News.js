import React from 'react';

const News = (props) => {
    return(
            <div className="newsfeed-item">
                <p>{props.key}</p>
                <p>{props.body}</p>
                <p>{props.categories}</p>
                <p>{props.title}</p>
        </div>
    )
}

export default News; 