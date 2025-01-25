import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import MyHeader from './MyHeader';
import HeroSection from './HeroSection';
import TeamSection from './TeamSection';
import ConuAISection from './ConuAISection';
import AboutSection from './AboutSection';
import EventCards from './EventCards';
import CallToActionSection from './CallToActionSection';
import MyFooter from './MyFooter';
import QuantFundSection from './QuantFundSection';
import SignupSection from './SignupSection';
import SigninSection from './SigninSection';
import { AuthProvider } from './contexts/AuthContext';

// Create a wrapper component to handle layout
function Layout({ children }) {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/signup' || location.pathname === '/signin';

    return (
        <div className="flex relative flex-col min-h-screen [background-color:oklch(97.69%_0.00107_-72.824)]">
            {!hideHeaderFooter && <MyHeader />}
            <main className="flex-auto">
                <div className={`${!hideHeaderFooter ? 'px-6 w-full mx-auto max-w-7xl' : ''}`}>
                    {children}
                </div>
            </main>
            {!hideHeaderFooter && <MyFooter />}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <HeroSection />
                                <CallToActionSection />
                            </>
                        } />
                        <Route path="/about" element={<AboutSection />} />
                        <Route path="/team" element={<TeamSection />} />
                        <Route path="/activities" element={<EventCards />} />
                        <Route path="/conuai" element={<ConuAISection />} />
                        <Route path="/quantfund" element={<QuantFundSection />} />
                        <Route path="/signup" element={<SignupSection />} />
                        <Route path="/signin" element={<SigninSection />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
