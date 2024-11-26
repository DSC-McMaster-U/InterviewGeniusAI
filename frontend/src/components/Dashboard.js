import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';  

function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                name: 'John Doe',
                role: 'Admin',
                lastLogin: '2024-11-24',
            };
            setUserData(data);  // Set user data in state
        };
        fetchData();
     }, []);  // Empty dependency array makes sure it runs once when component mounts

    return (
        <div>
            <h2>Dashboard</h2>
            {/* If userData exists, pass it to UserInfo component */}
            {userData ? (
                <UserInfo userData={userData} />
            ) : (
                <p>Loading user data...</p>  
            )}
        </div>
    );
}

export default Dashboard;