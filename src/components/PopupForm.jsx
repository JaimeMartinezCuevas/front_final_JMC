import { Autocomplete, Card, CardContent, CardActions, Typography, Divider, FormControl, FormLabel, Button, Input, styled } from '@mui/joy';
import { Dialog } from '@mui/material';
import { EditOutlined, MusicNote, InfoOutlined, CalendarMonthRounded, PianoRounded, DriveFileRenameOutlineRounded, AttachFile } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function PopupForm({ open, onClose, song = null }) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [artistName, setArtistName] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const VisuallyHiddenInput = styled('input')`
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        width: 1px;
        `;


    async function saveSong() {
        try {
            await axios.post('http://localhost:3000/songs', { title, link, artistName, genre, year });
            onClose();
        } catch (error) {
            alert('An error occurred while adding the song: ' + error);
        }
    }

    // Funcion para actualizar una canción
    async function updateSong() {
        try {
            console.log("Entro a la funcion de actualizar la cancion");
            await axios.put(`http://localhost:3000/songs/${id}`, { title, link, artistName, genre, year });
            console.log("Se actualizo la cancion");
            onClose();
        } catch (error) {
            alert('An error occurred while updating the song: ' + error);
        }
    }

    // Funcion para cargar los datos de la canción a editar
    async function loadSong() {
        try {
            const { data } = await axios.get(`http://localhost:3000/songs/${song}`);
            setId(data._id);
            setTitle(data.title);
            setLink(data.link);
            setArtistName(data.artistName);
            setGenre(data.genre);
            setYear(data.year);
        } catch (error) {
            alert('An error occurred while loading the song: ' + error);
        }
    }

    useEffect(() => {
        if (song) {
            loadSong();
        } else {
            setId('');
            setTitle('');
            setLink('');
            setArtistName('');
            setGenre('');
            setYear('');
        }
    }, [song]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                '.MuiPaper-rounded': {
                    borderRadius: '1.25rem',
                },
                zIndex: 0,
            }}
            PaperProps={{
                sx: {
                    overflow: "auto"
                }
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    maxHeight: 'max-content',
                    maxWidth: '100%',
                    mx: 'auto',
                    resize: 'horizontal',
                }}
            >
                <Typography variant="h3" className='!p-3 text-2xl flex items-center'>
                    {song ? <EditOutlined className='mr-2 text-[1.65rem]' /> : <InfoOutlined className='mr-2 text-[1.65rem]' />}
                    {song ? 'Edit song' : 'Add new song'}
                </Typography>
                <Divider />
                <CardContent
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: 1.5,
                        padding: 1.5,
                    }}
                >
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Song title</FormLabel>
                        <Input variant='outlined' endDecorator={<MusicNote />} sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0rem',
                            '--Input-focusedHighlight': '#111c43',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#111c43',
                                boxShadow: '0 0 0 0.08rem rgba(17,28,67,.25)',
                            },
                        }}
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>YouTube URL</FormLabel>
                        <Input variant='outlined' endDecorator={<MusicNote />} sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0rem',
                            '--Input-focusedHighlight': '#111c43',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#111c43',
                                boxShadow: '0 0 0 0.08rem rgba(17,28,67,.25)',
                            },
                        }}
                            value={link}
                            onChange={e => setLink(e.target.value)} />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Artist Name</FormLabel>
                        <Input variant='outlined' endDecorator={<MusicNote />} sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0rem',
                            '--Input-focusedHighlight': '#111c43',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#111c43',
                                boxShadow: '0 0 0 0.08rem rgba(17,28,67,.25)',
                            },
                        }}
                            value={artistName}
                            onChange={e => setArtistName(e.target.value)} />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Genre</FormLabel>
                        <Input variant='outlined' endDecorator={<MusicNote />} sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0rem',
                            '--Input-focusedHighlight': '#111c43',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#111c43',
                                boxShadow: '0 0 0 0.08rem rgba(17,28,67,.25)',
                            },
                        }}
                            value={genre}
                            onChange={e => setGenre(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Year</FormLabel>
                        <Input type='number' endDecorator={<CalendarMonthRounded />} sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0rem',
                            '--Input-focusedHighlight': '#111c43',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#111c43',
                                boxShadow: '0 0 0 0.08rem rgba(17,28,67,.25)',
                            },
                        }}
                            value={year}
                            onChange={e => setYear(e.target.value)} />
                    </FormControl>
                    <CardActions sx={{ gridColumn: '1/-1' }}>
                        <Button
                            variant='outlined'
                            sx={{
                                color: '#111c43',
                                borderColor: '#111c43',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#111c43',
                                    color: '#fff',
                                }
                            }}
                            onClick={song ? updateSong : saveSong}
                        >
                            {song ? 'Save changes' : 'Add Song'}
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Dialog>

    );
}

PopupForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    song: PropTypes.string,
};

export default PopupForm;