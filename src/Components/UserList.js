import React,{ useContext} from 'react';
import { UserContext } from './UserContext';

const UsersList = () => {
    const{ state, dispatch} = useContext(UserContext);

    const handleDeleteUser = (userId) => {
        dispatch({type:'DELETE_USER', payload:userId})
    };

    return(
        <div>
            <h2>User List:</h2>
            <ol>
                {state.users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDeleteUser(user.id)}>Delate</button>
                    </li>
                ))}
            </ol>
        </div>
    )
};

export default UsersList;