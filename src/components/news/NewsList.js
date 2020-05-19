import React, { Component } from 'react';
import '../../assets/style/newslist.css';
import News from './News';
import NewsHeader from './NewsHeader';

class NewsList extends Component {
    constructor() {
        super();
        this.state = {
            newsList: [],
            loading: true,
            isClicked: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            this.setState({
                newsList : data.Data,
                loading: false
            })
          
        })
    }
    loadMore = () => {
        this.setState({isClicked: !this.state.isClicked})

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
         console.log(newsList.length)

         this.state.isClicked ? newsList.length = newsList.length : newsList.length = 25;

        return (
            <div className="news-container">        
            <NewsHeader />
            <div className="news-list-container" id="latestNews">
                <h1 className="main-center-header">Latest News</h1>
                <div className="news-list-wrapper">
                {newsList}
                </div>
                <div className="btn-view__all__container">
                <button className="view-all" onClick={this.loadMore}>
                { this.state.isClicked ? 'Show Less -' : 'Show All +'}
                </button>
            </div>
            </div>
            </div>

        )
    }
}

export default NewsList;
