import { useState, useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg"

import MovieCard from "./MovieCard";

// 9a7c601b

const API_URL = "http://www.omdbapi.com?apikey=9a7c601b";


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search);
        // console.log(title)
    }

    useEffect(() => {
        searchMovies("spiderman")
    }, [])

    return(
        <div className="app">

            <h1>Movies</h1>

            <div className="search">
                <input 
                    type="text"
                    placeholder="Search for movies" 
                    value= {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0
                    ?(
                        <div className="container">
                            {/* <MovieCard movie={movies[4]}/> */}
                            {movies.map( (movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App;