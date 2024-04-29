import React from "react";
import { useState, useEffect } from 'react'

import Table from '../components/Table.jsx'
import PopupForm from '../components/PopupForm.jsx'

function Add() {

    const [open, setOpen] = useState(false);
    const [songs, setSongs] = useState([]);
    const [editingSong, setEditingSong] = useState(null);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      getSongs();
      setOpen(false);
    };
  
    //Importamos las canciones desde la bd
    const getSongs = async () => {
      const res = await fetch('http://localhost:3000/songs');
      const data = await res.json();
      setSongs(data);
    }
  
    //Eliminamos una canción por su id
    const deleteSong = async (id) => {
      await fetch(`http://localhost:3000/songs/${id}`, {
        method: 'DELETE'
      });
      getSongs();
    }
  
    const onEdit = (id) => {
      console.log('Edit', id);
      setEditingSong(id);
    }
  
    const onDelete = (id) => {
      console.log('Delete', id);
      deleteSong(id);
    }
  
    useEffect(() => {
      getSongs();
    }, []);
  
    useEffect(() => {
      getSongs();
    }, [editingSong]);

    return (
        <>
            <h2>Añadir y gestionar canciones</h2>

            <button className="btnAdd" onClick={handleOpen}>Add song</button>

            <PopupForm open={open} onClose={handleClose} />

            <Table songs={songs} onEdit={onEdit} onDelete={onDelete} />
            {editingSong &&
            <PopupForm open={true} onClose={() => setEditingSong(null)} song={editingSong} />
            }
        </>
    )
}

export default Add