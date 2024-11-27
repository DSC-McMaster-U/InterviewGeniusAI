// component responsible for displaying user data passed
import React from 'react';

const UserInfo = ({ userData }) => {
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Role: {userData.role}</p>
            <p>Last Login: {userData.lastLogin}</p>
        </div>
    );
};

export default UserInfo;