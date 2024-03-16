import React from 'react';
import Header from './Header';
import './App.css';
import TeamList from './TeamList';

function App() {
  return (
    <div className="App">
      <Header title="Barbara and David's bowling teams" />
      <TeamList />
    </div>
  );
}

export default App;
