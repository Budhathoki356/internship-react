import React, { ReactElement } from 'react'
import { Movies } from '../types';
import MovieList from './MovieList';

interface Props {
    error?: string
    movies: Movies[]
}

const MovieListRender = ({ error, movies }: Props): ReactElement => {

    if (error) return <p> Unable to fetch movies.</p>

    if (!movies?.length) return <p>No movies available.</p>

    return (
        <>
            {movies.map((movie) => (
                <div className="image-container d-flex justify-content-start m-3" key={movie.imdbID}>
                    <MovieList content={movie} />
                </div>
            ))
            }
        </>
    )
}

export default MovieListRender
