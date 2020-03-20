import React from 'react';
import '../../assets/style/news.css';

const News = (props) => {
    let {image, articleUrl, title, body, categories} = props;
    return(
            <div className="news-item">
                <div className="news-item__left">
                <img src={`${image}`} alt ="news pic" className="news-img"/>
                </div>

                <div className="news-item__right">
                <a href={`${articleUrl}`} target="blank">

                <h3 className="news-header">{title}</h3>
                   <p className="news-item-paragraph news-item__hide-mobile">{body}</p>
                <p className="categories">{categories}</p></a>

                </div>
        </div>
    )
}

export default News; 