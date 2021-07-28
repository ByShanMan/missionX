import React from 'react';
import Header2 from './Header2';
import Footer2 from './Footer2';
import Dashboard from './Dashboard';

export default function DashboardApp() {
    return (
        <div className="App">
            <Header2 />
            <Dashboard />
            <Footer2 />
        </div>
    )
}