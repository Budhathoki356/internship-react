import React, { ReactElement } from 'react'
import { Movies } from '../types/index';

interface Props {
    content: Movies
}

const MovieList = ({ content }: Props): ReactElement => {

    const { Title, imdbID, Year, Type, Poster } = content

    return (

        <div>
            <img alt={`${Title} logo`} src={Poster} />
            <div className="overlay ">
                <h3>{Title}</h3>
                <div className="d-flex align-items-center justify-content-center">
                    <p>{imdbID} | {Year}</p>
                    <p>{Type}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieList
