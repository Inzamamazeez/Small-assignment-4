import React, {useState, useContext} from 'react';
import { UserContext } from './UserContext';
import './AddUser.css';

const AddUserForm = () =>{
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const {dispatch} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: Date.now(),
            name,
            email,
        };

        dispatch({type:'ADD_USER', payload: newUser});

        setName('');
        setEmail('');
    };

    return(
        <div>
            <h2>Add User:</h2>
            <form onSubmit={handleSubmit} className='form_container'>
                <input type='text' placeholder='Name' value={name}
                onChange={(e) => setName(e.target.value)}/>

                <input type='email' placeholder='Email' value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <button type='submit' onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )

};

export default AddUserForm;