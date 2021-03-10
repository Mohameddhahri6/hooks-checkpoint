/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
    return (
        < div className='col-6 movie-card'>
            <div className="right_side" style={{backgroundImage:`url(${movie.second_img})`}}/>
            <div className="left_side">
            <div className="left_side_inner">
                <img src={movie.main_img}/>
                <div >
                    <h1>{movie.title}</h1>
                    {}
                </div>
            </div> 
            <div>
            {}
            </div>
            </div>
            <Link to={`/description/${movie.id}`}>Movie description</Link>    
        </div>
        
    )
}

export default MovieCard
