import React, {Component} from 'react';
import apiResponse from '../services/ApiRequestService';
import Controls from '../components/presentation/Controls';
import Output from '../components/presentation/Output';

export default class RestyContainer extends Component {
    state = {
        url: '',
        method: 'GET',
        body: '',
        results: {},
        
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
    }

    handleChange = ({ target }) => {
        this.setState({[target.name]: target.value})

    }

    render() {
        const {url, method, body, results } = this.state;
      
      return (
      <div> 
        
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