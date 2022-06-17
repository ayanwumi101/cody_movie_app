import React from 'react';
import './App.css';
import Sidenav from './components/Sidenav/Sidenav'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './components/About/About';
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import Subscribe from './components/Subscribe/Subscribe';
import Video from './components/Video/Video';
import Movies from './components/Movies/Movies';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Wishlist from './components/Wishlist/Wishlist';
import Downloads from './components/Downloads/Downloads'


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
          <Route exact path='/movies' element={<Movies />} />
          <Route exact path='/bookmarks' element={<Bookmarks />} />
          <Route exact path='/downloads' element={<Downloads />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

