import React, { useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';

const Genres = ({ 
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  getPage 
}) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    getPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
    getPage(1);
  };

  const fetchGenre = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en`
      );
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenre();
    return () => { setGenres([]); };
  }, [type]);

  return (
    <div style={{ padding: "6px 0" }}>
      {/* Selected genres */}
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip 
          key={genre.id} 
          label={genre.name} 
          style={{ margin: 2 }}
          size="small"
          color="primary"
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}

      {/* Available genres */}
      {genres && genres.map((genre) => (
        <Chip 
          key={genre.id} 
          label={genre.name} 
          style={{ margin: 2 }}
          clickable
          color='secondary'
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
