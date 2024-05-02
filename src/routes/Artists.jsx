import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongCard from '../components/SongCard';

function Artists({ filteredSongs, currentPlaying, handlePlay, songs }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Artistas</h1>

      <input className="search-bar"
        type="text"
        placeholder="Buscar por autor..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="song-list">
        {filteredSongs(searchTerm).map((song) => (
          <SongCard
            key={song._id}
            song={song}
            handlePlay={handlePlay}
            currentPlaying={currentPlaying}
          />
        ))}
      </div>

      <div className='currently-playing-container'>
        {currentPlaying && (
          <div className="currently-playing">
            <h3>{songs.find(song => song.videoId === currentPlaying)?.title}</h3>
            <h4>{songs.find(song => song.videoId === currentPlaying)?.artistName}</h4>
            <img className="playing" src="https://media.tenor.com/GqAwMt01UXgAAAAj/cd.gif" alt="" />
            <img className='mini-thumbnail' src={`https://img.youtube.com/vi/${currentPlaying}/0.jpg`} alt="Miniatura del vídeo" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Artists;