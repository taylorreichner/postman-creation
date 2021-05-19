import React, {Component} from 'react';
import apiResponse from '../services/ApiRequestService';
import Controls from '../components/presentation/Controls';
import Output from '../components/presentation/Output';
import History from '../components/history/History';

export default class RestyContainer extends Component {
    state = {
        url: '',
        body: '',
        results: [],
        searches: [],
        method: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        apiResponse({
            url: this.state.url,
            method: this.state.method,
            body: this.state.body,
            })
            .then(results => {
                this.setState({ results });
              })
            .then(
              this.setState(state => ({
                searches: [
                  ...state.searches,
                {url: state.url, method: state.method}
                ]
              }))
            );
    }

    handleChange = ({ target }) => {
        this.setState({[target.name]: target.value})

    }

    render() {
        const {url, method, body, results, searches } = this.state;
      
      return (
      <div> 
        <h1><History searches={searches}/> </h1>
        <Controls 
        url={url}
        method={method}
        body={body}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}/>
        <Output results={results}/>
        </div>
      )
    }


}