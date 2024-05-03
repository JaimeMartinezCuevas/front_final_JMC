import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableFooter, TableHead, TableRow, Paper, IconButton, StyledEngineProvider, Typography } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';


function SongsTable({ songs, onEdit, onDelete }) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    return (
        <StyledEngineProvider injectFirst>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#f9f9f9' }}>
                        <TableRow>
                            <TableCell><Typography variant="titleTabla">Title</Typography></TableCell>
                            <TableCell><Typography variant="titleTabla">Link</Typography></TableCell>
                            <TableCell><Typography variant="titleTabla">Artist</Typography></TableCell>
                            <TableCell><Typography variant="titleTabla">Genre</Typography></TableCell>
                            <TableCell><Typography variant="titleTabla">Year</Typography></TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {songs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((score) => (
                            <TableRow
                                key={score._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {score.title}
                                </TableCell>
                                <TableCell>
                                    {(() => {
                                        try {
                                            const url = new URL(score.link);
                                            const videoId = url.searchParams.get('v');
                                            if (videoId) {
                                                const shortLink = `https://youtu.be/${videoId}`;
                                                return (
                                                    <a href={shortLink} target="_blank" rel="noopener noreferrer">
                                                        {shortLink}
                                                    </a>
                                                );
                                            }
                                        } catch (error) {
                                            //Si el enlace no es una URL válida o no es un enlace de YouTube, simplemente devolvemos el enlace original
                                            return (
                                                <a href={score.link} target="_blank" rel="noopener noreferrer">
                                                    {score.link}
                                                </a>
                                            );
                                        }
                                    })()}
                                </TableCell>
                                <TableCell>{score.artistName}</TableCell>
                                <TableCell>{score.genre}</TableCell>
                                <TableCell>{score.year}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => onEdit(score._id)}><EditIcon /></IconButton>
                                    <IconButton onClick={() => onDelete(score._id)}><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6}>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 15]}
                                    component="div"
                                    count={songs.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={(event, newPage) => setPage(newPage)}
                                    onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
                                />
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </StyledEngineProvider >
    );
}

SongsTable.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            link: PropTypes.string,
            artistName: PropTypes.string,
            genre: PropTypes.string,
            year: PropTypes.number,
        })
    ),
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

export default SongsTable