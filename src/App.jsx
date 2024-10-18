import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Movie from './components/Movie';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import "./App.css";


function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]); 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={
            <>
              <Navbar setSearchResults={setSearchResults} favorites={favorites} />
              <Movie setFavorites={setFavorites} favorites={favorites} searchResults={searchResults} />
            </>
          } />
          <Route path="/MovieDetail/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} /> 
        </Routes>
        
      </div>
    </Router>
  );
}


export default App;


