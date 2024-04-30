import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AddSong from './AddSong.jsx';
import SongCard from './components/SongCard.jsx';

import Home from './routes/Home';
import Artists from './routes/Artists';
import Genre from './routes/Genre';
import Add from './routes/Add';

function App() {
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  //ID del video reproduciéndose
  const [currentPlaying, setCurrentPlaying] = useState(null); 

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

  const handlePlay = (videoId) => {
    setCurrentPlaying(videoId);
  };

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <a href="#main">
              <img src="../public/img/logov2.png" alt="Imagotipo" />
              </a>
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
            <Route className="route-link" path="/" element={<Home />} />
            <Route className="route-link" path="/artists" element={<Artists />} />
            <Route className="route-link" path="/genre" element={<Genre />} />
            <Route className="route-link" path="/add" element={<Add />} />
          </Routes>
        </div>
      </Router>

      <div className="song-list">
        {songs.map(song => (
          <SongCard key={song._id} song={song} handlePlay={handlePlay} currentPlaying={currentPlaying} />
        ))}
      </div>

      <div className='currently-playing-container'>
        {currentPlaying && (
          <div className="currently-playing">
            <h3>{songs.find(song => song.videoId === currentPlaying)?.title}</h3>
            <p>Autor: {songs.find(song => song.videoId === currentPlaying)?.author}</p>
            <img src={`https://img.youtube.com/vi/${currentPlaying}/0.jpg`} alt="Miniatura del vídeo" />
          </div>
        )}
      </div>

    </>
  );
}

export default App;