import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';
import { fetchUserData } from './services/userService';

function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserData();
            setUserData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {userData ? <UserInfo userData={userData} /> : <p>Loading user data...</p>}
        </div>
    );
}

export default Dashboard;