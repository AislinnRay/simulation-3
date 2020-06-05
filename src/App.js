import React from 'react';
import './App.css';
// import routes from './routes'
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/auth/Auth';
import Form from './components/form/Form';
import Post from './components/post/Post';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      {/* {routes} */}
      <Auth/>
      <Form/>
      <Post/>
      <Nav/>
      <Dashboard/>
    </div>
  );
}

export default App;
