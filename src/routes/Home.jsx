import React from 'react';
import SongCard from '../components/SongCard';

function Home({ songs, handlePlay, currentPlaying }) {
  return (
    <>
      <div className="header-title">
        <h1>RADIO NEW VEGAS</h1>
        <p>¡Explora la biblioteca musical completa de todas las canciones, melodías y baladas que alguna vez han resonado por el yermo!</p>
      </div>

      <div className="song-list">
        {songs.map((song) => (
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
  );
}

export default Home;