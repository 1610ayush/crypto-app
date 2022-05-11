import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext';
import { Navbar } from "./components/Navbar";
import { Home } from './components/Home';
import { Coin } from './components/Coin';


export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="container-sm" >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/:coinId/" element={<Coin />} /> 
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}
