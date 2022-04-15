import React, { Component } from 'react'
import axios from 'axios'

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: "not yet gathered"
        }
    }

    componentDidMount = () => {
        axios.get('/users').then(response => {
            this.setState({
                users: response.data.users
            });

            console.log(response);
        });
    };


    handleButtonClick = () => {
        axios.get('/users').then(response => {
            this.setState({
                users: response.data.users
            });

            // if (err) {
            //     console.log(err)
            // }
            console.log(response)
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>SHABUYA ROLL CALL!!!</button>
                <h1>The Boys: {this.state.users}</h1>
            </div>
        );
    }
}
