import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class loginForm extends React.Component {


        state = {
            credentials: {
                username: '',
                password: ''
            },
            loading: false
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
        this.setState({ loading: true}, () => {
            // console.log(this.state.loading)
            axiosWithAuth()
            .post('/login', this.state.credentials)
            .then((res) => {
                this.setState({
                    loading: false
                })
                // console.log('succesful login', res);
                localStorage.setItem('authorizationToken', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch((err) => {
                // console.log('failed login', err);
                localStorage.removeItem('authorizationToken');
            });
        })
        
    }

    render() {
        const {loading} = this.state;
        return (
            <div className='login-form'>
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
                    <button onClick={this.login}>
                        { loading && <i className='fa fa-cog fa-spin' />}
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default loginForm;
