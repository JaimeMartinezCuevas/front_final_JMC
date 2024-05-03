import React, { useState } from 'react';
import SongCard from '../components/SongCard';

function Home({ songs, handlePlay, currentPlaying }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  };

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="header-title">
      <h1 className='main-h1'><span className="rotate">☢</span> RADIO NEW VEGAS <span className="rotate">☢</span></h1>
      <p>¡Explora la biblioteca musical completa de todas las canciones, melodías y baladas que alguna vez han resonado por el yermo!</p>
      </div>

      <input 
        className='search-bar'
        type="text"
        placeholder="Buscar por título..."
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
    </>
  )
}

export default Home