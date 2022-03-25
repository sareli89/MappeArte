import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, UseEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <main>
        <div className="container mt-5 d-flex justify-content-center">
          <div className="row col-4">
            <Button color="orange" />
          </div>
        </div>
        <Link to="/UserRegister">
          <a>Ingresar</a>
        </Link>
      </main>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserRegister" element={<UserRegister />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
