import React from 'react';

const NowPlayingContainer = ({ currentPlayingSong }) => {
  return (
    <div style={styles.container}>
      {currentPlayingSong && (
        <div>
          <p style={styles.text}>Ahora sonando: {currentPlayingSong.title}</p>
          <img src={`https://img.youtube.com/vi/${currentPlayingSong.videoId}/0.jpg`} alt={currentPlayingSong.title} style={styles.thumbnail} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
  },
  text: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  thumbnail: {
    width: '100px',
    height: '56px',
  },
};

export default NowPlayingContainer;
