import React from 'react';
import Header from './components/Header/Header';
import Logo from './components/Logo';
import Collection from './components/Collection/Collection';
import './index.css';

function App() {
  return (
    <div className='main' >
      <Header />
      <Logo />
      <Collection />
    </div>
  );
}

export default App;
