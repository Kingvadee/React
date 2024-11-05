// src/components/MainContent.js
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main>
      <section id="homepage">
        <h1>Welcome to Your TonOfGem</h1>
        <p>TonOfGem is a community that encourages individuals
            to elevate and reach the pinnacle of self mastery,
            by growing knowledge in areas that will boost your
            thoughts and income.
            We focus more on your Mind&Wallet.</p>
        <button>Get Started</button>
      </section>
      <section id="features">
        <h2>Our Features</h2>
        <p>Tech Tips.</p>
        <p>Freelancing Guide.</p>
        <p>Mindset Boost</p>
      </section>
    </main>
  );
};

export default MainContent;
