import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const DisplayError = () => {
    const error = useRouteError();
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!!</p>
            <p className='text-red-400'>{ }</p>
            <h4 className='text-3xl'><button onClick={handleLogOut}>Sign out</button> And log back in</h4>

        </div>
    );
};

export default DisplayError;