import React from 'react';
import './App.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Ton Of Gem💎</h1>
        <p>
          This is your number 1 platform for everything exciting!
          From learning how to monetize your time on the internet to freelancing and much more!
          Stick around and follow me on all social media platforms where I will be dropping helpful content.
          <a href="https://linktr.ee/tonofgem" target="_blank" rel="noopener noreferrer">Linktree</a>
        </p>
        <TwitterTimelineEmbed
          sourceType="https://x.com/tonOfGem"
          screenName="tonOfGem"
          options={{ height: 400 }}
        />
        <Blog />
      </header>
    </div>
  );
}

export default App;
