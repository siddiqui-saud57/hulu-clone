import React,{useState,useEffect} from 'react';
import VideoCard from "./VideoCard";
import "./Result.css";
import axios from "./axios";

const Result = ({selectedOption}) => {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
     async function fetchData() {
         const request = await axios.get(selectedOption);
         setMovies(request.data.results)
         return request;
     }
     fetchData();
    },[selectedOption])
    return (
        <div className="result">
            {movies.map((movie) => (
                <VideoCard  movie = {movie}/>
            ))}
            

        </div>
    )
}

export default Result
