import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriend from './AddFriend'

class friendsPage extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.pullFriends();
      }

    pullFriends = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then((res) => {
            console.log('succesful friends call', res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => console.log('failed friends call', err))
    }

    render() {
        const friends = this.state.friends;
        // console.log('const friends', friends)
        return (
        <>
        <div className='friends-flex'>
            <div className='add-friend-container'>
                <AddFriend />
            </div>
                
            <div className='friends-container'>
                    {friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
            </div>
        </div>
            
        </>
        )
    }
}

export default friendsPage;


// {gasPrices.map(price => (

//         <p>{price.date}</p>

//           <p>${price.USPrice}</p>
//   ))}