import React from 'react';
import YouTube from 'react-youtube';

const SongCard = ({ song, handlePlay, currentPlaying }) => {
  
  song.videoId = getYoutubeVideoId(song.link);
  
  const { _id, title, link, artistName, genre, videoId } = song;
  
  //console.log("videoId:", videoId);

  return (
    <div className="song-card">
      <div className="video-container">
        {currentPlaying === videoId ? (
          <YouTube videoId={videoId} />
        ) : (
          <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt={title} onClick={() => handlePlay(videoId)} />
        )}
      </div>
      <div className="song-details">
        <h3>{title}</h3>
        <p><span>Artista</span> ▸ {artistName}</p>
        <p><span>Género</span> ▸ {genre}</p>
      </div>
    </div>
  );
};

const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? match[2] : null;
};

export default SongCard;