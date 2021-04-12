import React from 'react';
import "./VideoCard.css";
import TextTruncate from 'react-text-truncate';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = ({movie}) => {
    return (
        <div className="videocard">
     <img src={`${base_url}${movie.backdrop_path}`} alt="pic"  />   
     <div className="trunc">
     <TextTruncate
                line={1}
                element="p"
                truncateText='....'
                text={movie.overview}
            />
     <h2>{movie.title || movie.original_name}</h2>
     <p className="videoCard__stats">
         {movie.media_type && `${movie.media_type}`}
         {movie.release_date || movie.first_air_date}
         </p>  
         </div>  
    
        </div>
    )
}

export default VideoCard
