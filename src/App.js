import React,{useState,useEffect} from "react"
import "./App.css"
import SearchIcon from "./Search.svg"
import Moviecard from "./MovieCard"
const API_URL=`http://www.omdbapi.com/?apikey=c5c78130`

const App=()=>{
const [movies,setMovies]=useState([]);
const [input,setInput]=useState();

const movieSearch=async (title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data=await response.json();
    setMovies(data.Search)
}

useEffect(()=>{movieSearch(input)},[input])  

function handleChange(event){
    const value=event.target.value;
    setInput(value);
}

return(
<div className="app">
<h1>MovieLand</h1>

<div className="search">
<input placeholder="Search movie" value={input} onChange={handleChange}></input>
<img src={SearchIcon} alt="search" onClick={()=>{movieSearch(input)}}></img>
</div>
{
    movies?.length>0?(
        <div className="container">
           {movies.map((movie)=>(
            <Moviecard movie={movie} />
           ))}
        </div>):(
        <div className="empty">
            <h1>No movies found</h1>
        </div>
)
}

</div>)
}

export default App;