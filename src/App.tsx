import React from 'react';
import './App.css';
import { Navbar } from './sections/Navbar';
const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1>Nieche Ekom</h1>
      </header>

      <h1 className="text-4xl underline">
        Hello tailwind!
      </h1>

      <main>
        <p>BLEGH</p>
      </main>
      <footer>
        <p>&copy;HUGE COMPANY</p>
      </footer>
    </div>
  );
}

export default App;