import React from 'react';
import axios from 'axios';

class loginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    
    login = e => {
        e.preventDefault();

        axios
            .post()
    }
    render() {
        return (
            <div>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='user name'
                        value={this.state.credentials.username}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.credentials.password}
                    />
                </div>
            </div>
        )
    }
}

export default loginForm;
