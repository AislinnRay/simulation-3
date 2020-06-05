import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      {routes}
      <Nav/>
    </div>
  );
}

export default App;
