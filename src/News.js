import React from 'react';
import './News.css';

const News = (props) => {
    return(
            <div className="news-item">
                {props.key}
                <div className="news-item__left">
                <img src={`${props.image}`} alt ="news pic" className="news-img"/>
                </div>
                <div className="news-item__right">
                <a href={`${props.articleUrl}`}> <h3 className="news-header">{props.title}</h3>
                <p className="news-item-paragraph">{props.body}</p>
                <p className="categories">{props.categories}</p></a>
                {/* <p className="categories">{props.tags}</p> */}

                </div>
        </div>
    )
}

export default News; 