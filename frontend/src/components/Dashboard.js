import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Placeholder method to fetch user data
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        // Simulating fetching data from an API
        const dummyData = {
            name: 'John Doe',
            role: 'Software Engineer',
            lastLogin: '2024-10-18',
        };
        setUserData(dummyData);
    };

    return (
        <div>
            <h2>Dashboard</h2>
            {userData ? (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Role: {userData.role}</p>
                    <p>Last Login: {userData.lastLogin}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default Dashboard;
