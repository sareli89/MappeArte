import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, UseEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
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
          <Route path="/Login" element={<Login />} />
          <Route path="/UserRegister" element={<UserRegister />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
