import React, { ReactElement, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import MovieListRender from './components/MovieListRender';
import { Movies } from './types/index';
import MovieListHeading from './components/MovieListHeading';

const App = (): ReactElement => {

  const [movies, setMovies] = useState<Movies[]>([])
  const [err, setErr] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')

  // Handle change

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setSearchValue(text)
  }

  // GET MOVIES
  const getMoviesRequest = async (searchValue: string) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=beb032aa`

    try {

      const response = await fetch(url)

      const resJSON = await response.json();

      if (resJSON.Search) {
        setMovies(resJSON.Search)
      }
    } catch (e) {
      setErr(e.message)
    }

  }

  useEffect(() => {
    getMoviesRequest(searchValue)
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <div className="col col-sm-4">
          <input
            type="text"
            className="form-control"
            value={searchValue}
            onChange={handleChange}
            placeholder="Type to search..."
          />
        </div>
      </div>
      <div className='row'>
        <MovieListRender error={err} movies={movies} />
      </div>
    </div>
  );
}

export default App;
