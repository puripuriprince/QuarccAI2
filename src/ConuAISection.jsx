import React, { useState } from 'react';
import ConuAIGuide from './ConuAIGuide';
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import MarkdownResponse from './components/MarkdownResponse';

function ConuAISection() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Starting query submission with:', query);

        try {
            const token = localStorage.getItem('token');
            console.log('Token present:', !!token);
            
            if (!token) {
                console.log('No token found, redirecting to signin');
                navigate('/signin');
                return;
            }

            console.log('Making API request to:', 'http://127.0.0.1:5000/api/query');
            const res = await fetch('http://127.0.0.1:5000/api/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ query }),
            });

            console.log('API Response status:', res.status);
            const data = await res.json();
            console.log('API Response data:', data);
            
            if (res.status === 401) {
                console.log('Unauthorized access, redirecting to signin');
                setResponse("Please sign in to use ConuAI.");
                navigate('/signin');
                return;
            }

            if (data.error) {
                console.error('API returned error:', data.error);
                throw new Error(data.error);
            }
            
            console.log('Setting response:', data.response);
            setResponse(data.response);
        } catch (error) {
            console.error('Detailed error:', {
                message: error.message,
                stack: error.stack,
                error
            });
            setResponse('Sorry, there was an error processing your request.');
        } finally {
            setIsLoading(false);
        }
    };

    const welcomeMessage = user 
        ? `Hello ${user.firstName}, how can ConuAI help you today?`
        : "How can ConuAI help you today?";

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto space-y-8 mt-24">
                <div className="flex h-96 w-full flex-col items-center justify-center gap-y-8 rounded-xl bg-[oklch(44.889%_0.15545_-73.341)]">
                    <h2 className="text-center text-xl font-bold text-white sm:text-4xl">
                        Your AI assistant for all things Concordia
                    </h2>
                    
                    <div className="w-full max-w-2xl px-4">
                        <form onSubmit={handleSubmit} className="relative mx-auto h-12 w-full overflow-hidden rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 z-50 h-5 w-5 -translate-y-1/2 transform text-[oklch(44.889%_0.15545_-73.341)]">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            <input 
                                className="relative z-50 size-full rounded-full border-none bg-transparent pl-10 pr-20 text-sm text-black focus:outline-none focus:ring-0 sm:pl-10 sm:text-base" 
                                type="text" 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={welcomeMessage}
                                disabled={isLoading}
                            />
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="absolute right-2 top-1/2 z-50 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[oklch(96.833%_0.01405_-72.601)] transition duration-200 disabled:bg-gray-100"
                            >
                                {isLoading ? (
                                    <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-[oklch(44.889%_0.15545_-73.341)]" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-[oklch(44.889%_0.15545_-73.341)]">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l14 0"></path>
                                        <path d="M13 18l6 -6"></path>
                                        <path d="M13 6l6 6"></path>
                                    </svg>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 px-4">
                        {['Clubs and ECs', 'Internships', 'Scholarships', 'Scheduling', 'Bureaucracy'].map((tag) => (
                            <div 
                                key={tag} 
                                onClick={() => {
                                    setQuery(`Tell me about ${tag.toLowerCase()} at Concordia`);
                                }}
                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[oklch(96.833%_0.01405_-72.601)] text-[oklch(44.889%_0.15545_-73.341)] hover:bg-secondary/80 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash size-3 text-[oklch(44.889%_0.15545_-73.341)]">
                                    <line x1="4" x2="20" y1="9" y2="9"></line>
                                    <line x1="4" x2="20" y1="15" y2="15"></line>
                                    <line x1="10" x2="8" y1="3" y2="21"></line>
                                    <line x1="16" x2="14" y1="3" y2="21"></line>
                                </svg>
                                <span>{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {response && (
                    <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                        <MarkdownResponse content={response} />
                    </div>
                )}

                <ConuAIGuide />
            </div>
        </div>
    );
}

export default ConuAISection; 