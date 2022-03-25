import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, UseEffect } from 'react';
import './App.css';
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'

function App() {
  return (
    <div className="App">
      <main>
        <Link to='/UserRegister' >
          <a>Ingresar</a>
        </Link>
      </main>
      <div>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/UserRegister' element={<UserRegister/>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
