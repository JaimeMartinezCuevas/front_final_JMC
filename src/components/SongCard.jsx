import React from 'react';
import YouTube from 'react-youtube';

const SongCard = ({ song }) => {
  const { title, link, artistName, genre } = song;

  return (
    <div className="song-card">
      <h3>{title}</h3>
      <p>Artist: {artistName}</p>
      <p>Genre: {genre}</p>
      <YouTube videoId={getYoutubeVideoId(link)} />
    </div>
  );
};

// Función para obtener el ID del video de YouTube desde la URL
const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? match[2] : null;
};

export default SongCard;