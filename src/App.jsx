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

function App({ searchTerm }) {
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  //ID del video reproduciéndose
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const getFilteredSongs = (searchTerm) => {
    return searchTerm
      ? songs.filter(song => song.artistName.toLowerCase().includes(searchTerm.toLowerCase()))
      : songs;
  };

  const getSongs = async () => {
    try {
      const response = await axios.get('http://back-final-jmc.onrender.com/songs');
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
              <img src="../img/logov2.png" alt="Imagotipo" />
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
            <Route className="route-link" path="/" element={<Home songs={songs} handlePlay={handlePlay} currentPlaying={currentPlaying} />} />
            <Route className="route-link" path="/artists" element={<Artists filteredSongs={getFilteredSongs} handlePlay={handlePlay} currentPlaying={currentPlaying} songs={songs} />} />            
            <Route className="route-link" path="/genre" element={<Genre songs={songs} handlePlay={handlePlay} currentPlaying={currentPlaying} />} />            
            <Route className="route-link" path="/add" element={<Add />} />
          </Routes>
        </div>
      </Router>

      {/* <div className="song-list">
        {getFilteredSongs().map(song => (
          <SongCard key={song._id} song={song} handlePlay={handlePlay} currentPlaying={currentPlaying} />
        ))}
      </div> */}

      {/* <div className='currently-playing-container'>
        {currentPlaying && (
          <div className="currently-playing">
            <h3>{songs.find(song => song.videoId === currentPlaying)?.title}</h3>
            <h4>{songs.find(song => song.videoId === currentPlaying)?.artistName}</h4>
            <img className="playing" src="https://media.tenor.com/GqAwMt01UXgAAAAj/cd.gif" alt="" />
            <img className='mini-thumbnail' src={`https://img.youtube.com/vi/${currentPlaying}/0.jpg`} alt="Miniatura del vídeo" />
          </div>
        )}
      </div> */}
    </>
  );
}

export default App;
