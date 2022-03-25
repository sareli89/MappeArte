import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, UseEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <main>          
        <Link to="/UserRegister">
          <a>Ingresar</a>
        </Link>
      </main>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
