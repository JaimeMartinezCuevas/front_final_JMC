import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

import AddSong from './AddSong.jsx'

import Home from './routes/Home';
import Artists from './routes/Artists';
import Genre from './routes/Genre';
import Add from './routes/Add';

//import SongCard from './components/SongCard';
import Table from './components/Table.jsx'
import PopupForm from './components/PopupForm.jsx'

function App() {
  
  // const [open, setOpen] = useState(false);
  // const [songs, setSongs] = useState([]);
  // const [editingSong, setEditingSong] = useState(null);

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   getSongs();
  //   setOpen(false);
  // };

  // // Importamos las canciones desde la bd
  // const getSongs = async () => {
  //   const res = await fetch('http://localhost:3000/songs');
  //   const data = await res.json();
  //   setSongs(data);
  // }

  // // Eliminamos una canción por su id
  // const deleteSong = async (id) => {
  //   await fetch(`http://localhost:3000/songs/${id}`, {
  //     method: 'DELETE'
  //   });
  //   getSongs();
  // }

  // const onEdit = (id) => {
  //   console.log('Edit', id);
  //   setEditingSong(id);
  // }

  // const onDelete = (id) => {
  //   console.log('Delete', id);
  //   deleteSong(id);
  // }

  // useEffect(() => {
  //   getSongs();
  // }, []);

  // useEffect(() => {
  //   getSongs();
  // }, [editingSong]);

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
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
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </Router>

      {/* <button onClick={handleOpen}>Add song</button>

      <PopupForm open={open} onClose={handleClose} />

      <Table songs={songs} onEdit={onEdit} onDelete={onDelete} />
      {editingSong &&
        <PopupForm open={true} onClose={() => setEditingSong(null)} song={editingSong} />
      } */}
    </>
  )
}

export default App
