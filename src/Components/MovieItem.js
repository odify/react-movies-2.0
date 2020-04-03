import React, { Component } from 'react';
import movies from 'MovieData';
import './movies.css';


const Movies = (props) => {
    return (
        <div className="movies-div">
            <h1>{props.title}</h1>
            <h2>{props.year}</h2>
            <h2>{props.director}</h2>
            <h3>{props.duration}</h3>
            <h3>{props.rate}</h3>
            <h3>{props.genre}</h3>

        </div>
    )
}

const data = movies.map(x =>
    <Movies title={x.year} director={x.director} duration={x.duration} rate={x.rate} genre={x.genre} />

)
const Movies = () => {
    return (

        <div className="movies-div">{data}</div>
    )
}
export default MovieItem;