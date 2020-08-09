import React, { useState } from 'react';
import axios from 'axios';



 const AddFriend = () => {
   
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''

    })

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    };

    const submitFriend = e => {
        e.preventDefault();


    }

    return (
        <form onSubmit={submitFriend}>
            <label htmlFor='name'>
                <input value={newFriend.name} name='Friend-name' type='text' placeholder='name' />
            </label>

            <label htmlFor='age'>
                <input value={newFriend.age} name='age' type='text' placeholder='age' />
            </label>

            <label htmlFor='email'>
                <input value={newFriend.email} name='email' type='text' placeholder='email' />
            </label>

        </form>
    )

}

export default AddFriend;