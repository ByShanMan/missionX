import React from 'react';
import Header3 from './Header3.js';
import SPBTabs from './SPBTabs';
import Footer2 from './Footer';

export default function SPBApp() {
    return (
        <div className="App">
            <Header3 />
            <SPBTabs />
            <Footer2 />
        </div>
    );
}