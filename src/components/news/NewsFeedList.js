import React, {Component} from 'react';
import '../../assets/style/newsfeedlist.css';
import NewsFeed from './NewsFeed';


class NewsFeedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "News Feed",
            newsFeed: [],
            loading: false
        }   
    }
    componentDidMount() {
        
        this.setState({loading: true});
        fetch("https://min-api.cryptocompare.com/data/news/feeds")
        .then(response => response.json())
        .then(data => {
            // const newData = this.state.newsList.concat([data]);  
            this.setState({
                newsFeed: data,
                loading: false
            })
        })
    }

    render() {
            const newsFeed = this.state.newsFeed.map(newsItem => (

                <NewsFeed
                        name={newsItem.name}
                        key={newsItem.key}
                        language={newsItem.lang}
                        image={newsItem.img}

                 />
             ))

        return(
            <div className="newsfeed-container" id="newsFeed">
                <h1 className="main-center-header">{this.state.title}</h1>
                 <div className="newsfeed-wrapper">
                    {newsFeed} 
                </div>
            </div>
        )
    }
} 
export default NewsFeedList;