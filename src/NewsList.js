import React, { Component } from 'react';
import './NewsList.css';
import News from './News';

export class NewsList extends Component {
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
            const newData = this.state.newsList.concat([data]);  
            console.log(newData);

            this.setState({
                newsList : newData,
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
    
             />
         ))
        return (
            <div class="news-list-container">
                <h1>News</h1>
                {newsList}
            </div>
        )
    }
}

export default NewsList
