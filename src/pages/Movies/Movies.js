import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenre';


const Movies = () => {

  const[page,setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages,setNumOfPages] = useState()
  const [selectedGenres,setSelectedGenres] = useState([])
  const [genres,setGenres] = useState([])
  const genreforurl = useGenres(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${genreforurl}`
    )
    setContent(data.results);
    setNumOfPages(Math.min(data.total_pages, 500));
};

useEffect(() => {
    fetchMovies();
  }, [page,genreforurl]);

  return (
    <div>
      <span className='pageTitle'>Movies</span>
      <Genres
      type='movie'
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      getPage={setPage}

      />
      <div className='trending'>
        {content && content.map((c) => (
          <SingleContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path} 
          title={c.title || c.name} 
          date={c.first_air_date || c.release_date} 
          media_type="movie" 
          vote_average={c.vote_average} 
           />
        ))}
      </div>
      {numOfPages > 1 && (<CustomPagination getPage={setPage} numOfPages={numOfPages}/>)}
    </div>
  )
}

export default Movies
