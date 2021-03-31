import React, {ReactElement} from 'react'

interface Props {
    heading: string
}

const MovieListHeading = ({heading}:Props): ReactElement => {
    return (
        <div className="col">
            <h1>{heading}</h1>
        </div>
    )
}

export default MovieListHeading
