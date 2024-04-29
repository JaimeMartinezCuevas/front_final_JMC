import React from 'react';
import YouTube from 'react-youtube';

//Obtener el ID del video de YouTube desde la URL
const SongCard = ({ song }) => {
  const { title, link, artistName, genre } = song;

  return (
    <>
    <div className="song-card">
      <div className="video-container">
        <YouTube videoId={getYoutubeVideoId(link)} />
      </div>
      <div className="song-details">
        <h3>{title}</h3>
        <p>Artist: {artistName}</p>
        <p>Genre: {genre}</p>
      </div>
    </div>
    </>
  );
};

const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? match[2] : null;
};

export default SongCard