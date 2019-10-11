import React from 'react';
import Dogs from './components/Dogs'
import Cats from './components/Cats'
import Foxes from './components/Foxes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Foxes/>
     <Dogs/>
     <Cats/>
    </div>
  );
}

export default App;
