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
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then((res) => {
                console.log('succesful login', res);
                localStorage.setItem('authorizationToken', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch((err) => {
                console.error('failed login', err.message);
                localStorage.removeItem('authorizationToken');
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        placeholder='user name'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default loginForm;
