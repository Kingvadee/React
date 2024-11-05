// src/App.js
import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Header from './components/feader';
import MainContent from './components/MainContent';
import Footer from './components/footer';

const App = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Signed out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>My Blog App</h1>
        <SignUp />
        <SignIn />
        <button onClick={handleSignOut}>Sign Out</button>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
