import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import React, { Component } from 'react';
import UserPage from './pages/UserPage';
import UserSagaPage from './pages/UserSagaPage';

function App() {
  return (
    <>
      <UserSagaPage />
    </>
  );
}

export default App;
