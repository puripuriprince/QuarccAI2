import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function SignupSection() {
    const { signup, error } = useAuth();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        isConcordiaAffiliate: false,
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const roleOptions = formData.isConcordiaAffiliate 
        ? [
            { value: 'bachelors', label: 'Bachelors Student' },
            { value: 'masters', label: 'Masters Student' },
            { value: 'phd', label: 'PhD Student' },
            { value: 'faculty', label: 'Faculty' },
            { value: 'staff', label: 'Staff' },
            { value: 'other', label: 'Other' }
          ]
        : [
            { value: 'highschool', label: 'High School Student' },
            { value: 'researcher', label: 'Researcher' },
            { value: 'engineer', label: 'Engineer' },
            { value: 'other', label: 'Other' }
          ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            try {
                await signup(formData);
                // Show success message
                alert('Registration successful! Please sign in.');
                navigate('/signin');
            } catch (error) {
                // Error is handled by AuthContext
                console.error('Signup failed:', error);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
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
            <div className="lg:p-8 py-16 sm:py-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
                    <div className="flex flex-col items-start justify-center gap-y-4">
                        <div className="flex flex-col space-y-2 text-left">
                            <h1 className="text-2xl font-semibold tracking-tight">Registration</h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your name, email and password to create an account.
                                Already have an account? <Link to="/signin" className="text-[oklch(44.889%_0.15545_-73.341)]">Login here</Link>
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <form onSubmit={handleSubmit} className="w-full space-y-6">
                                {/* Progress Steps */}
                                <nav className="group my-4" aria-label="Registration Steps">
                                    <ol className="flex items-center" aria-orientation="horizontal">
                                        {[1, 2, 3].map((step) => (
                                            <React.Fragment key={step}>
                                                <li className="flex flex-shrink-0 items-center">
                                                    <button
                                                        type="button"
                                                        className={`flex size-10 items-center justify-center rounded-full ${
                                                            step <= currentStep
                                                                ? 'bg-[oklch(44.889%_0.15545_-73.341)] text-white'
                                                                : 'bg-[oklch(97.69%_0.00107_-72.824)] text-[oklch(44.889%_0.15545_-73.341)] border border-[oklch(44.889%_0.15545_-73.341)]'
                                                        }`}
                                                        disabled={step !== currentStep}
                                                    >
                                                        {step}
                                                    </button>
                                                </li>
                                                {step < 3 && (
                                                    <div className={`h-1 flex-1 ${
                                                        step < currentStep 
                                                            ? 'bg-[oklch(44.889%_0.15545_-73.341)]'
                                                            : 'bg-[oklch(97.69%_0.00107_-72.824)] border-t border-[oklch(44.889%_0.15545_-73.341)]'
                                                    }`} />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </ol>
                                </nav>

                                {/* Form Content */}
                                {currentStep === 1 && (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Are you a Concordia affiliate?
                                            </label>
                                            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 w-full">
                                                <button
                                                    type="button"
                                                    className={`w-full h-9 px-3 rounded-md border border-[oklch(44.889%_0.15545_-73.341)] ${
                                                        formData.isConcordiaAffiliate
                                                            ? 'bg-[oklch(44.889%_0.15545_-73.341)] text-white'
                                                            : 'bg-white text-[oklch(44.889%_0.15545_-73.341)]'
                                                    }`}
                                                    onClick={() => setFormData({ ...formData, isConcordiaAffiliate: true })}
                                                >
                                                    Yes
                                                </button>
                                                <button
                                                    type="button"
                                                    className={`w-full h-9 px-3 rounded-md border border-[oklch(44.889%_0.15545_-73.341)] ${
                                                        !formData.isConcordiaAffiliate
                                                            ? 'bg-[oklch(44.889%_0.15545_-73.341)] text-white'
                                                            : 'bg-white text-[oklch(44.889%_0.15545_-73.341)]'
                                                    }`}
                                                    onClick={() => setFormData({ ...formData, isConcordiaAffiliate: false })}
                                                >
                                                    No
                                                </button>
                                            </div>
                                            <p className="text-[0.8rem] text-muted-foreground">
                                                Current Concordia affiliates include students, faculty, staff, and alumni.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Select your role
                                            </label>
                                            <select
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                className="w-full h-10 px-3 rounded-md border border-[oklch(44.889%_0.15545_-73.341)] bg-white focus:ring-2 focus:ring-[oklch(44.889%_0.15545_-73.341)]"
                                                required
                                            >
                                                <option value="">Select a role...</option>
                                                {roleOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <p className="text-[0.8rem] text-muted-foreground">
                                                Please select the role that best describes you
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="space-y-4">
                                        <div className="grid gap-y-4">
                                            <div className="flex items-center gap-x-4">
                                                <div className="space-y-1">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="firstName">
                                                        First Name
                                                    </label>
                                                    <input
                                                        className="flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(44.889%_0.15545_-73.341)] disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                                                        placeholder="John"
                                                        id="firstName"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        className="flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(44.889%_0.15545_-73.341)] disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                                                        placeholder="Doe"
                                                        id="lastName"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    className="flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(44.889%_0.15545_-73.341)] disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                                                    placeholder="name@concordia.ca"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                                    Password
                                                </label>
                                                <div className="relative rounded-md">
                                                    <input
                                                        className="flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                        placeholder="********"
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground hover:bg-primary-foreground hover:text-accent-foreground"
                                                    >
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="confirmPassword">
                                                    Confirm Password
                                                </label>
                                                <div className="relative rounded-md">
                                                    <input
                                                        className="flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                        placeholder="********"
                                                        type="password"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground hover:bg-primary-foreground hover:text-accent-foreground"
                                                    >
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">
                                            Step {currentStep === 1 ? 'Affiliation' : currentStep === 2 ? 'Details' : 'Verification'}
                                        </span>
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="h-9 px-4 py-2 border border-[oklch(44.889%_0.15545_-73.341)] text-[oklch(44.889%_0.15545_-73.341)] rounded-md hover:bg-[oklch(97.69%_0.00107_-72.824)]"
                                            disabled={currentStep === 1}
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="h-9 px-4 py-2 bg-[oklch(44.889%_0.15545_-73.341)] text-white rounded-md hover:bg-[oklch(44.889%_0.15545_-73.341)]/90"
                                        >
                                            {currentStep === 3 ? 'Submit' : 'Next'}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <p className="px-8 text-center text-sm text-muted-foreground">
                                By creating an account, you agree to our{' '}
                                <Link to="#" className="underline underline-offset-4 hover:text-primary">
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link to="/privacy-policy" className="underline underline-offset-4 hover:text-primary">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative hidden h-full flex-col bg-muted text-white lg:flex">
                <div className="absolute inset-0">
                    <img
                        src="/hero-bg.jpg"  // Make sure this matches your hero image path
                        alt="Hero background"
                        className="h-full w-full object-cover opacity-30"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(44.889%_0.15545_-73.341)] to-[oklch(44.889%_0.15545_-73.341)]/60" />
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2 p-8">
                        <p className="text-lg">
                            "Join QUARCC and be part of the future of AI research and innovation."
                        </p>
                        <footer className="text-sm">QUARCC Team</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default SignupSection; 