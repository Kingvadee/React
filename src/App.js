import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import SignUp from './SignUp';
import SignIn from './SignIn';

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
    <div>
      <h1>My Blog App</h1>
      <SignUp />
      <SignIn />
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default App;
