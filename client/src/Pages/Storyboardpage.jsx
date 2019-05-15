import React from 'react';
import NavBar from './Basic/NavBar.js';
import Footer from './Basic/Footer.js';
import Storyboard from './StoryBoard/Storyboard.js';

const storyboardpage = () => {
    return (
        <div>
        <div className="container">
            <NavBar />
                <Storyboard />
        </div>
        <div><Footer /></div>
        </div>
    );
}

export default storyboardpage;