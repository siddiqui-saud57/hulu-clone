import React from 'react';
import "./Nav.css";
import requests from "./requests";

const Nav = ({setSelectedOption}) => {
    return (
        <div  className="Nav">
             <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchTopRated)}>TopRated</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchComedyMovie)} >Comedy</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchDocumentaries)}>Mystery</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchMystery)}>Scifi</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchSciFi)}>Western</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
             <h2 onClick = {() => setSelectedOption(requests.fetchTv)}>TV movie</h2>
        </div>
    )
}

export default Nav
