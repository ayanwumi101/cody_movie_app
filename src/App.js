import React from 'react';
import './App.css';
import Movies from './components/Movies/Movies'
import Sidenav from './components/Sidenav/Sidenav'
import Notifications from './components/Notifications/Notifications'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Videos from './components/Videos/Videos';



function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/videos' element={<Videos />} />
          {/* <Route exact path='/downloads' element={<Downloads />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route exact path='/movies' element={<Movies />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
