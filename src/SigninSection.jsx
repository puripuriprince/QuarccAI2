import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function SigninSection() {
    const { signin, error } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with:', formData);
        try {
            const result = await signin(formData);
            console.log('Signin result:', result);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            {error && (
                <div className="text-red-500 text-sm text-center mb-4">
                    {error}
                </div>
            )}
            {/* Back Button */}
            <div className="absolute left-0 top-0 p-4">
                <Link to="/" className="whitespace-nowrap text-sm font-medium group/button relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:w-16 h-9 w-9 border border-input bg-card shadow-sm hover:bg-accent hover:text-accent-foreground">
                    <div className="absolute inset-0 flex items-center justify-center group-hover/button:-translate-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </div>
                    <p className="inline-flex translate-x-8 whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:translate-x-2 group-hover/button:opacity-100">
                        Back
                    </p>
                </Link>
            </div>

            {/* Left Side - Form */}
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email to sign in to your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(44.889%_0.15545_-73.341)] disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@concordia.ca"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(44.889%_0.15545_-73.341)] disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full h-9 px-4 py-2 bg-[oklch(44.889%_0.15545_-73.341)] text-white rounded-md hover:bg-[oklch(44.889%_0.15545_-73.341)]/90"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-[oklch(44.889%_0.15545_-73.341)]">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative hidden h-full flex-col bg-muted text-white lg:flex">
                <div className="absolute inset-0">
                    <img
                        src="/hero-bg.jpg"
                        alt="Hero background"
                        className="h-full w-full object-cover opacity-30"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(44.889%_0.15545_-73.341)] to-[oklch(44.889%_0.15545_-73.341)]/60" />
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2 p-8">
                        <p className="text-lg">
                            "Welcome back to QUARCC - where innovation meets community."
                        </p>
                        <footer className="text-sm">QUARCC Team</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default SigninSection; 