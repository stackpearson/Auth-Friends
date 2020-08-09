import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';



 const AddFriend = () => {
   
    const [friend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''

    })

    const handleChanges = e => {
        setNewFriend({...friend, [e.target.name]: e.target.value})
        // console.log('form changes', e.target.value)
    };

    const submitFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/friends', friend)
            console.log(friend)
            // .then(res => console.log('post success', res))
            // .catch(err => console.log('post failed', err))


    }

    return (
        <form onSubmit={submitFriend}>
            <label htmlFor='name'>
                <input value={friend.name} name='name' type='text' placeholder='name' onChange={handleChanges} />
            </label>

            <label htmlFor='age'>
                <input value={friend.age} name='age' type='text' placeholder='age' onChange={handleChanges} />
            </label>

            <label htmlFor='email'>
                <input value={friend.email} name='email' type='text' placeholder='email' onChange={handleChanges} />
            </label>
            <button type='submit'>Add Friend</button>

        </form>
    )

}

export default AddFriend;