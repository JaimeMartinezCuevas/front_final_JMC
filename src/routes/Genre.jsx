import React, { useState } from 'react';
import SongCard from '../components/SongCard';

function Genre({ songs, handlePlay, currentPlaying }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSongs = songs.filter(song => song.genre.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1><span className="rotate">⚛</span> GÉNERO <span className="rotate">⚛</span></h1>
      <p>¿Quieres escuchar nuevas canciones parecidas a tus favoritas?</p>

      <input className="search-bar"
        type="text"
        placeholder="Buscar por género..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="song-list">
        {filteredSongs.map((song) => (
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

export default Genre;