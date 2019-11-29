import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';


class Form extends Component {
    
    state = {cryptoName: ''};
    handleSubmit = async(event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.coinmarketcap.com/v1/ticker/?${this.state.cryptoName}`);
        this.props.onSubmit(resp.data);
        this.setState({ cryptoName: '' });
    }

    render() {
        return (
            <div className="Search-Container">
            <form onSubmit={this.handleSubmit}>
      <span className="formtext"></span>
    	  <input className="Search-Bar"
          type="text" 
          value={this.state.cryptoName}
          onChange={event => this.setState({cryptoName: event.target.value})}
          placeholder="Search for Crypto" 
          required 
        />
        <button className="Btn-Search">Search</button>
    	</form>
            </div>
        )
    }
}

export default Form
