import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';  // Importing UserInfo component

function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch user data from an API or service
            const data = {
                name: 'John Doe',
                role: 'Admin',
                lastLogin: '2024-11-24',
            };
            setUserData(data);  // Set user data in state
        };
        fetchData();
    }, []);  // Empty dependency array ensures this runs once when the component mounts

    return (
        <div>
            <h2>Dashboard</h2>
            {/* If userData exists, pass it to UserInfo component */}
            {userData ? (
                <UserInfo userData={userData} />
            ) : (
                <p>Loading user data...</p>  // Show loading message if userData is null
            )}
        </div>
    );
}

export default Dashboard;