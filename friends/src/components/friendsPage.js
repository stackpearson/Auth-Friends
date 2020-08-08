import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
class friendsPage extends React.Component {

    componentDidMount() {
        this.pullFriends();
      }

    pullFriends = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then((res) => {
            console.log('succesful friends call', res)
        })
        .catch(err => console.err('failed friends call', err.message))
    }

    render() {
        return (
            <p>friends page here</p>
        )
    }
}

export default friendsPage;