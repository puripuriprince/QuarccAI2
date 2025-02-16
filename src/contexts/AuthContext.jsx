import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const API_URL = 'http://127.0.0.8:5000/api';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check token and set user on initial load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Verify token with backend
            fetch(`${API_URL}/auth/verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) throw new Error('Token verification failed');
                return res.json();
            })
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                } else {
                    localStorage.removeItem('token');
                }
            })
            .catch(() => {
                localStorage.removeItem('token');
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const signup = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Signup failed');
            }
            
            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const signin = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            console.log('Attempting signin with:', credentials);
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            
            console.log('Response status:', response.status);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Login failed');
            }
            
            const data = await response.json();
            console.log('Login response:', data);
            
            if (!data.token || !data.user) {
                throw new Error('Invalid response format');
            }
            
            setUser(data.user);
            localStorage.setItem('token', data.token);
            return data;
        } catch (err) {
            console.error('Signin error:', err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    const queryAI = async (query) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_URL}/query`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ query })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Query failed');
            }
            
            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            error, 
            signup, 
            signin, 
            signout,
            queryAI 
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
