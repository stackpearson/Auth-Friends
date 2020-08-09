import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriend from './AddFriend'
import PrivateRoute from './PrivateRoute';

 class friendsPage extends React.Component {

     constructor(props){
         super(props)
         this.state = {
            friends: []
        };
     }
  

    componentDidMount() {
        this.pullFriends();
      }


    pullFriends = () => {
        axiosWithAuth().get('/friends')
        .then((res) => {
            console.log('succesful friends call', res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => console.log('failed friends call', err))
    }

    deleteFriend(id, e){
        axiosWithAuth().delete(`/friends/${id}`)
        .then(res => {
            console.log('delete request', res.data)
        })

        const updatedFriends = this.state.friends.filter(item => item.id !==id);
        this.setState({
            friends: updatedFriends
        })
    }


    render() {
        const friends = this.state.friends;
        // const newFriend = this.state.newFriend;
        return (
        <>
        <div className='friends-flex'>
            <div className='add-friend-container'>
                <PrivateRoute component={AddFriend} />
            </div>
                
            <div className='friends-container'>
                    {friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={(e) => this.deleteFriend(friend.id, e)}>Delete</button>
                </div>
            ))}
            </div>
        </div>
            
        </>
        )
    }
}

export default friendsPage;

