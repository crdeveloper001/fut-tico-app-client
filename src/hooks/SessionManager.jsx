/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClientDashboard } from '../pages/components/ClientDashboard/ClientDashboard';
import { AdminDashboard } from '../pages/components/AdminDashboard/AdminDashboard';

// Create a context to provide session data throughout the app
const SessionContext = createContext();

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ ClientDashboard, AdminDashboard }) {
    const [user, setUser] = useState(null);

    // Function to set the user data in localStorage
    const setSession = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    // Function to clear the user data from localStorage
    const clearSession = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    // Initialize the session from localStorage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <SessionContext.Provider value={{ user, setSession, clearSession }}>
            {ClientDashboard}
        </SessionContext.Provider>
    );
}
