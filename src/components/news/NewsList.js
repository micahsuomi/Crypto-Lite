import React, { Component } from 'react';
import '../../assets/style/newslist.css';
import News from './News';
import NewsHeader from './NewsHeader';

class NewsList extends Component {
    constructor() {
        super();
        this.state = {
            newsList: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then(response => response.json())
        .then(data => {

            this.setState({
                newsList : data.Data,
                loading: false
            })
          
        })
    }
   
    render() {

        const newsList = this.state.newsList.map(newsItem => (
            <News
                    key={newsItem.id}
                    body={newsItem.body}
                    categories={newsItem.categories}
                    title={newsItem.title}
                    image={newsItem.imageurl}
                    articleUrl={newsItem.url}
                    tags={newsItem.tags}
    
             />
         ))
        return (
            <div className="news-container">        
            <NewsHeader />
            <div className="news-list-container" id="latestNews">
                <h1 className="main-center-header">Latest News</h1>
                <div className="news-list-wrapper">
                {newsList}
                </div>
            </div>
            </div>

        )
    }
}

export default NewsList;
