import React from 'react';
import './App.css';
import Movies from './components/Movies/Movies'
import Sidenav from './components/Sidenav/Sidenav'
import Notifications from './components/Notifications/Notifications'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './components/About/About';
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import Subscribe from './components/Subscribe/Subscribe';
import Video from './components/Video/Video';







function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav />
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/login' />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/videos' element={<Videos />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/subscribe' element={<Subscribe />} />
          <Route exact path='/video/:id' element={<Video />} />

          {/* <Route exact path='/downloads' element={<Downloads />} />
          <Route exact path='/movies' element={<Movies />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

