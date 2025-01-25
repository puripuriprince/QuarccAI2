import React from 'react';
import EventCards from './EventCards.jsx';

function RecentEventsSection() {
    return (
        <div>
            <header className="flex flex-col items-center gap-y-2">
                <h1 className="text-3xl font-bold">Recent Events</h1>
                <p className="mx-auto max-w-xs text-center text-muted-foreground">
                    Explore our latest events and stay updated with the latest news and happenings.
                </p>
            </header>
            <div className="mt-12">
                <div className="container mx-auto max-w-7xl px-6">
                    <EventCards inHomePage={true} />
                </div>
            </div>
        </div>
    );
}

export default RecentEventsSection;
