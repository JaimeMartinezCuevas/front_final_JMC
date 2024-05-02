import React, { useState } from 'react';
import axios from 'axios';

export default function AddSong() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [artistName, setArtistName] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://back-final-jmc.onrender.com/songs', { title, link, artistName, genre, year });
            alert('Song added successfully');
        } catch (error) {
            alert('An error occurred while adding the song: ' + error);
        }
    };

    return (
        <>
            <h2>Add Song</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" required />
                <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} placeholder="Artist Name" required />
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" required />
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
                <button type="submit">Add Song</button>
            </form>
        </>

    );
};