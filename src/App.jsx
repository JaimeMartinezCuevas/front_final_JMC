import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

import AddSong from './AddSong.jsx'
import SongCard from './components/SongCard.jsx'

import Home from './routes/Home';
import Artists from './routes/Artists';
import Genre from './routes/Genre';
import Add from './routes/Add';

function App() {

  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]); // Declarar la variable songs en el estado

  const getSongs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/songs');
      setSongs(response.data);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };
  
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/artists">Artistas</Link>
              </li>
              <li>
                <Link to="/genre">Género</Link>
              </li>
              <li>
                <Link to="/add">Añadir</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </Router>

      <div className="song-list">
        {songs.map(song => (
          <SongCard key={song._id} song={song} />
        ))}
      </div>

    </>
  )
}

export default App
