import React, { Component } from 'react'

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: "not yet gathered"
        }
    }

    handleButtonClick = () => {
        axios.get('/users').then(response => {
            this.setState({
                users: response.users
            });
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Check on the boys</button>
                <h1>The Boys: {this.state.users}</h1>
            </div>
        );
    }
}
