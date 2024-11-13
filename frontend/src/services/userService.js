// handles data fetching logic and Dashboard focuses on rendering and managing layout
export const fetchUserData = () => {
    // Simulating an API call with dummy data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'John Doe',
                role: 'Software Engineer',
                lastLogin: '2024-10-18',
            });
        }, 1000); // Simulating a delay for async data fetching
    });
};